import React from "react";

export interface ContainerType {
  children?: React.ReactNode;
}

export const Container: React.FC<ContainerType> = (props) => {
  return (
    <div>
      <div className={`md:px-16 mx-auto small:max-w-lg medium:max-w-5xl relative large:max-w-7xl px-4 medium:px-10`}>{props.children}</div>
    </div>
  );
};

export default Container;
