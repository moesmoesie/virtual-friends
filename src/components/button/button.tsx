import React from "react";
import { z } from "zod";

export const Button: React.FC<ButtonType> = ({ type = "default", ...props }) => {
  if (type === "default") {
    if (props.href)
      return (
        <a href={props.href} target={props.newTab ? "_blank" : ""} rel="noreferrer">
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
      <a href={props.href} target={props.newTab ? "_blank" : ""} rel="noreferrer">
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
  return <div className="font-bold font-body rounded-lg border border-primary-400 px-5 py-2 uppercase text-primary-400 focus:-translate-y-1 hover:-translate-y-1 transition-transform">{props.children}</div>;
};

const Default: React.FC<{ children: JSX.Element | string }> = (props) => {
  return <div className="font-bold font-body rounded-lg border border-primary-400 bg-primary-400 px-5 py-2 uppercase text-white focus:-translate-y-1 hover:-translate-y-1 transition-transform">{props.children}</div>;
};

export const ButtonZod = z.object({
  type: z.union([z.literal("default"), z.literal("outlined")]).optional(),
  text: z.string(),
  href: z.string().optional(),
  newTab: z.boolean().optional(),
  onClick: z.function().optional(),
});

export interface ButtonType extends z.infer<typeof ButtonZod> {}
