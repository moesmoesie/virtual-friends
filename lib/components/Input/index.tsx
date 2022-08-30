import { useEffect, useState } from "react";
import { InputMultilineProps, InputProps, InputSelectProps } from "./types";

export const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="relative">
      <input
        onChange={(event) => props.onChange(props.name, event.target.value)}
        required={props.required}
        name={props.name}
        placeholder={props.placeholder + (props.required ? " *" : "")}
        className={`border-b  outline-none placeholder:text-black placeholder:body-2 py-3 medium:py-4 w-full bg-transparent
        ${props.status === "idle" ? "!border-dark-purple-200" : ""}
        ${props.status === "succes" ? "!border-teal-500" : ""}
        ${props.status === "error" ? "!border-[#FF0000]" : ""}
        `}
      />
      {props.errorMessage && (
        <p className="mt-3 text-[#FF0000]">{props.errorMessage}</p>
      )}
    </div>
  );
};

export const MultlineInput: React.FC<InputMultilineProps> = (props) => {
  return (
    <div>
      <textarea
        onChange={(event) => props.onChange(props.name, event.target.value)}
        name={props.name}
        placeholder={props.placeholder}
        className={`border-b medium:min-h-[107px] placeholder:text-black medium:py-4 outline-none placeholder:body-2 py-3 border-dark-purple-200 w-full bg-transparent
            ${props.status === "idle" ? "!border-dark-purple-200" : ""}
            ${props.status === "succes" ? "!border-teal-500" : ""}
            ${props.status === "error" ? "!border-[#FF0000]" : ""}
        `}
      />
      {props.errorMessage && (
        <p className="mt-3 text-[#FF0000]">{props.errorMessage}</p>
      )}
    </div>
  );
};

export const SelectInput: React.FC<InputSelectProps> = (props) => {
  const [current, setCurrent] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (current != undefined) props.onChange(props.name, current);
  }, [current]);

  return (
    <div
      className={`border-b medium:pt-4 overflow-scroll outline-none pt-3 border-dark-purple-200 w-full bg-transparent
            ${props.status === "idle" ? "!border-dark-purple-200" : ""}
            ${props.status === "succes" ? "!border-teal-500" : ""}
            ${props.status === "error" ? "!border-[#FF0000]" : ""}
    `}
    >
      <p className="text-blackbody-2 mb-2">{props.placeholder}</p>
      <div className="flex gap-4 pb-3 medium:pb-4 overflow-scroll">
        {props.options.map((option, index) => {
          return (
            <button
              key={index}
              onClick={(event) => {
                event.preventDefault();
                setCurrent(option);
              }}
              className={`rounded-lg text-black/30 body-1 h-8 bg-dark-purple-300 ${
                option === current ? "!bg-gradient-purple !text-white" : ""
              }  px-3 py-1`}
            >
              {option}
            </button>
          );
        })}
      </div>
      {props.errorMessage && (
        <p className="mt-3 text-[#FF0000]">{props.errorMessage}</p>
      )}
    </div>
  );
};
