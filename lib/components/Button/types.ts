import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | string;
  type?: "default" | "accent";
}
