import React from "react";
import { ContainerProps } from "./types";

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className={`md:px-16 mx-auto small:max-w-md medium:max-w-5xl relative large:max-w-7xl px-4 medium:px-10`}
    >
      {children}
    </div>
  );
};

export default Container;
