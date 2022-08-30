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
        className="bg-gradient-purple px-6 py-2 body-3 text-white rounded-md relative shadow-[0px_4px_12px_rgba(157,75,244,0.4),_0px_12px_24px_rgba(0,0,0,0.15)]"
      >
        {children}
      </button>
    );
  }

  return (
    <button
      {...buttonArgs}
      className="bg-gradient-2 text-white px-6 py-2 body-3 rounded-md relative"
    >
      {children}
    </button>
  );
};

export default Button;
