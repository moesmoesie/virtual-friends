import React, { FC } from "react";
import { ButtonProps } from "./Button.types";

const Button: FC<ButtonProps> = ({ children, type = "default" }) => {
  if (type == "accent") {
    return (
      <button
        className="bg-purple-gradient shadow-CardShadowMedium rounded-md"
        style={{
          boxShadow:
            "0px 4px 5px rgba(121, 71, 247, 0.3), 0px 9px 10px rgba(121, 71, 247, 0.2), 0px 14px 32px rgba(121, 71, 247, 0.1)",
        }}
      >
        {children}
      </button>
    );
  }

  return (
    <button className="bg-green-gradient shadow-CardShadowMedium rounded-md">
      {children}
    </button>
  );
};

export default Button;
