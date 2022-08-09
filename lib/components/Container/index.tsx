import React from "react";
import { ContainerProps } from "./types";

const Container: React.FC<ContainerProps> = (props) => {
  return (
    <div
    style={{
      backgroundColor: props.module?.backgroundColor? props.module.backgroundColor: "transparent"
    }}
    >
    <div
      style={{
        paddingTop: props.module?.paddingTop ? `${props.module.paddingTop}px` : "0px",
        paddingBottom: props.module?.paddingBottom ? `${props.module.paddingBottom}px` : "0px",
      }}
      className={`md:px-16 mx-auto small:max-w-md medium:max-w-5xl relative large:max-w-7xl px-4 medium:px-10`}
    >
      {props.children}
    </div>
    </div>
  );
};

export default Container;
