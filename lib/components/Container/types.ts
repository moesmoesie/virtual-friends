import { Module } from "../../blocks/types";

export interface ContainerProps{
  module? : Module
  children?: JSX.Element | JSX.Element[] | undefined;
  className?: string;
}
