import React from "react";
import { ContainerProps } from "./types";

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`md:px-16 mx-auto max-w-7xl px-4 medium:px-10 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
