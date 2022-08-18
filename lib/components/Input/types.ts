import React, { MutableRefObject } from "react";


interface FormValue {
  value: string;
  status?: "success" | "error";
  message?: string;
}

export interface InputProps {
  name: string;
  placeholder: string;
  required?: boolean;
  inputRef: MutableRefObject<FormValue>
}

export interface InputSelectProps extends InputProps {
  type: "select";
  options: string[];
}

export interface InputMultilineProps extends InputProps {
  type: "multiline";
}
