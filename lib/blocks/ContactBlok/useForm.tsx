import { useState } from "react";

type ValidatorType<T> = {
  [Property in keyof T]?: ((value: string) => string | undefined)[];
};

type ErrorType<T> = {
  [Property in keyof T]?: string[];
};

type TokenType = {
  token: string;
  ekey: string;
};

export const useForm = <T,>(initialState: T, validators: ValidatorType<T>) => {
  const [values, setValues] = useState<T>(initialState);
  const [errors, setErrors] = useState<ErrorType<T>>({});
  const [token, setToken] = useState<TokenType | null>(null);

  const getErrors = (name: keyof T) => {
    return errors[name];
  };

  const getStatus = (name: keyof T): "succes" | "error" | "idle" => {
    const errors = getErrors(name);
    if (!errors) {
      return "idle";
    }
    if (errors.length === 0) {
      return "succes";
    }
    return "error";
  };

  const getErrorMessages = (name: keyof T): string[] | undefined | string => {
    const errors = getErrors(name);
    if (errors && errors.length > 0) {
      return errors;
    }
    return undefined;
  };

  const getFirstErrorMessage = (name: keyof T): string | undefined => {
    const errors = getErrorMessages(name);
    if (errors && errors.length > 0) {
      return errors[0];
    }
    return undefined;
  };

  const validate = (name: keyof T, newValues: T): [ErrorType<T>, boolean] => {
    const err: string[] = [];
    let hasError = false;
    validators[name]?.forEach((validator) => {
      const value = newValues[name] as any;
      const errorMessage = validator(value);
      if (errorMessage) {
        err.push(errorMessage);
        hasError = true;
      }
    });
    return [{ ...errors, [name]: err }, hasError];
  };

  const changeHandler = (name: keyof T, value: string) => {
    const newValues = { ...values, [name]: value };
    const [newErrors] = validate(name, newValues);
    setErrors(newErrors);
    setValues(newValues);
  };

  const submit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const newErrors: ErrorType<T> = {};
    let isValid = true;
    Object.keys(values).forEach((value) => {
      const name = value as keyof T;
      const [err, hasError] = validate(name, values);
      if (hasError) isValid = false;
      Object.assign(newErrors, err);
    });

    setErrors(newErrors);

    if (!isValid) {
      console.log("Contains Errors");
      return;
    }

    if (token === null) {
      console.log("Please prove you are a human");
      return;
    }

    // TODO: Implement post request
    // TODO: Implement server side response validation

    console.log("Ready to post!");
  };

  return {
    values,
    getErrorMessages,
    getFirstErrorMessage,
    getErrors,
    getStatus,
    setToken,
    changeHandler,
    submit,
  };
};
