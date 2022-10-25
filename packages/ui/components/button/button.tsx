import React from "react";

export interface ButtonType {
  type: "default" | "outlined";
  text: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonType> = (props) => {
  if (props.type === "default") {
    return (
      <button
        onClick={props.onClick}
        className="font-bold font-body rounded-lg bg-primary-400 px-5 py-2 uppercase text-white focus:-translate-y-1 hover:-translate-y-1 transition-transform"
      >
        {props.text}
      </button>
    );
  }

  return (
    <button
      onClick={props.onClick}
      className="font-bold font-body rounded-lg border border-primary-400 px-5 py-2 uppercase text-primary-400 focus:-translate-y-1 hover:-translate-y-1 transition-transform"
    >
      {props.text}
    </button>
  );
};
