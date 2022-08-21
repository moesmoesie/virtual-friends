export type ValidatorType<T> = {
  [Property in keyof T]?: ((value: string) => string | undefined)[];
};

export type ErrorFields<T> = keyof T | "hChaptcha" | "form";

export type ErrorType<T> = {
  [Property in ErrorFields<T>]?: string[];
};

export type TokenType = {
  token: string;
  ekey: string;
};
