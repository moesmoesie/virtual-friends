"use client";
import React from "react";

interface Props {
  label: string;
  onClick?: () => void;
}

const CTAPrimary: React.FC<Props> = (props) => {
  return (
    <button
      className="rounded-[30px] bg-coral hover:bg-coral-2 focus:bg-coral-2 active:bg-coral-3 text-white text-sm px-[15px] font-medium py-[10px] outline-none"
      onClick={() => {
        if (props.onClick) props.onClick();
      }}
    >
      {props.label}
    </button>
  );
};

export default CTAPrimary;
