import React, { FC } from "react";
import { ButtonProps } from "./Button.types";

const Button: FC<ButtonProps> = ({ children, type = "default" }) => {
  if (type == "accent") {
    return (
      <button className="bg-purple-gradient group relative rounded-md">
        <div className="bg-purple-gradient rounded-md z-0 transition-opacity duration-700 group-hover:duration-300 absolute w-full h-full blur-md opacity-60 group-hover:opacity-90 top-1 " />
        <div className="relative">{children}</div>
      </button>
    );
  }

  return (
    <button className="bg-green-gradient group rounded-md relative">
      <div className="bg-green-gradient rounded-md z-0 transition-opacity duration-700 group-hover:duration-300 absolute w-full h-full blur-md opacity-60 group-hover:opacity-90 top-1 " />
      <div className="relative">{children}</div>
    </button>
  );
};

export default Button;
