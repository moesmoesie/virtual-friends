import React from "react";

export interface ButtonType {
  type: "default" | "outlined";
  text: string;
  href?: string;
  newTab?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonType> = (props) => {
  if (props.type === "default") {
    if (props.href)
      return (
        <a href={props.href} target={props.newTab ? "_blank" : ""}>
          <Default>{props.text}</Default>
        </a>
      );

    return (
      <button onClick={props.onClick}>
        <Default>{props.text}</Default>
      </button>
    );
  }

  if (props.href)
    return (
      <a href={props.href} target={props.newTab ? "_blank" : ""}>
        <Outlined>{props.text}</Outlined>
      </a>
    );

  return (
    <button onClick={props.onClick}>
      <Outlined>{props.text}</Outlined>
    </button>
  );
};

const Outlined: React.FC<{ children: JSX.Element | string }> = (props) => {
  return (
    <div className="font-bold font-body rounded-lg border border-primary-400 px-5 py-2 uppercase text-primary-400 focus:-translate-y-1 hover:-translate-y-1 transition-transform">
      {props.children}
    </div>
  );
};

const Default: React.FC<{ children: JSX.Element | string }> = (props) => {
  return (
    <div className="font-bold font-body rounded-lg bg-primary-400 px-5 py-2 uppercase text-white focus:-translate-y-1 hover:-translate-y-1 transition-transform">
      {props.children}
    </div>
  );
};
