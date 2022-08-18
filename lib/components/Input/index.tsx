import { useState, useEffect } from "react";
import { InputMultilineProps, InputProps, InputSelectProps } from "./types";

export const Input: React.FC<InputProps> = (props) => {
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

export const MultlineInput: React.FC<InputMultilineProps> = (props) => {
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

export const SelectInput: React.FC<InputSelectProps> = (props) => {
  const [current, setCurrent] = useState<string>(props.options[0]);

  useEffect(() => {
    props.setValue(props.name, current);
  }, [current]);

  return (
    <div className="border-b medium:pt-4 overflow-scroll outline-none pt-3 border-dark-purple-200 w-full bg-transparent">
      <p className="text-white body-2 mb-2">{props.placeholder}</p>
      <div className="flex gap-4 pb-3 medium:pb-4 overflow-scroll">
        {props.options.map((option, index) => {
          return (
            <button
              key={index}
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
