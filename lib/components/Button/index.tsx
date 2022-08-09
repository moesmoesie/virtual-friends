import React, { FC } from "react";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({
  children,
  type = "default",
  ...buttonArgs
}) => {
  if (type == "accent") {
    return (
      <button
        {...buttonArgs}
        className="bg-gradient-purple px-6 py-2 body-3 rounded-md relative"
      >
        {children}
      </button>
    );
  }

  return (
    <button
      {...buttonArgs}
      className="bg-gradient-2 px-6 py-2 body-3 rounded-md relative"
    >
      {children}
    </button>
  );
};

export default Button;
