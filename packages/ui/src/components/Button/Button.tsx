import React, { FC } from "react";
import { ButtonProps } from "./Button.types";

const Button: FC<ButtonProps> = ({ children, type = "default" }) => {
  if (type == "accent") {
    return (
      <button className="body-3 bg-green-gradient rounded-md p-3 px-8 shadow-CardShadowMedium">
        {children}
      </button>
    );
  }

  return (
    <button className="body-3 bg-green-gradient rounded-md p-3 px-8 shadow-CardShadowMedium">
      {children}
    </button>
  );
};

export default Button;
