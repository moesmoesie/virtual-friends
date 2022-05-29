import React, { FC } from "react";
import { ButtonProps } from "./Button.types";

const Button: FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <button className="rounded-md bg-blue-300 p-4 text-3xl" {...props}>
      {text}
    </button>
  );
};

export default Button;
