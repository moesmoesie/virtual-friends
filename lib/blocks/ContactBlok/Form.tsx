import { useState, useEffect } from "react";
import { Button } from "../../components";

interface FormDataType {
  name: string;
  email: string;
  catagory: string;
  message: string;
}

const Form: React.FC = () => {
  const formData: FormDataType = {
    name: "",
    email: "",
    catagory: "",
    message: "",
  };

  const [formBody, setformBody] = useState<FormDataType>(formData);

  const inputChangeHandler = (name: string, value: string) => {
    setformBody({ ...formBody, [name]: value });
  };

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <form className="flex-1 gap-3 gap-x-6 grid-cols-1 grid">
      <Input
        setValue={(name, value) => inputChangeHandler(name, value)}
        required
        placeholder="Name"
        name="name"
      />

      <Input
        setValue={(name, value) => inputChangeHandler(name, value)}
        required
        placeholder="E-mail"
        name="email"
      />

      <SelectInput
        setValue={(name, value) => inputChangeHandler(name, value)}
        type="select"
        required
        placeholder="Catagory"
        options={["Need a website", "E-Commerce", "Other"]}
        name="catagory"
      />

      <MultlineInput
        setValue={(name, value) => inputChangeHandler(name, value)}
        type="multiline"
        placeholder="Message"
        name="message"
      />

      <div className="mt-8">
        <Button onClick={onSubmit} type="accent">
          <span className="body-2 whitespace-nowrap">Send Message</span>
        </Button>
      </div>
    </form>
  );
};

interface InputProps {
  name: string;
  placeholder: string;
  required?: boolean;
  setValue: (name: string, value: string) => void;
}

interface InputSelectProps extends InputProps {
  type: "select";
  options: string[];
}

interface InputMultilineProps extends InputProps {
  type: "multiline";
}

const SelectInput: React.FC<InputSelectProps> = (props) => {
  const [current, setCurrent] = useState<string>(props.options[0]);

  useEffect(() => {
    props.setValue(props.name, current);
  }, [current]);

  return (
    <div
      className={`border-b medium:pt-4 overflow-scroll outline-none pt-3 border-dark-purple-200 w-full bg-transparent`}
    >
      <p className="text-white body-2 mb-2">{props.placeholder}</p>
      <div className="flex gap-4 pb-3 medium:pb-4 overflow-scroll">
        {props.options.map((option) => {
          return (
            <button
              onClick={(event) => {
                event.preventDefault();
                setCurrent(option);
              }}
              className={`${
                option === current
                  ? "!text-white !bg-gradient-purple"
                  : undefined
              } rounded-lg text-white/30 body-1 h-8 bg-dark-purple-300 px-3 py-1`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const MultlineInput: React.FC<InputMultilineProps> = (props) => {
  return (
    <div>
      <textarea
        onChange={(e) => props.setValue(props.name, e.target.value)}
        name={props.name}
        placeholder={props.placeholder}
        className="border-b medium:min-h-[107px] placeholder:text-white medium:py-4 outline-none placeholder:body-2 py-3 border-dark-purple-200 w-full bg-transparent"
      />
    </div>
  );
};

const Input: React.FC<InputProps> = (props) => {
  return (
    <div>
      <input
        onChange={(e) => props.setValue(props.name, e.target.value)}
        required={props.required}
        name={props.name}
        placeholder={props.placeholder + (props.required ? " *" : "")}
        className={`border-b placeholder:text-white outline-none placeholder:body-2 py-3 medium:py-4 border-dark-purple-200 w-full bg-transparent`}
      />
    </div>
  );
};

export default Form;
