import React from "react";

export interface ModuleContainerType {
  module?: {
    id?: string;
    scrollMargin?: number;
    background?: string;
    paddingTop?: string;
    paddingBottom?: string;
    hide?: {
      small?: boolean;
      medium?: boolean;
      large?: boolean;
    };
  };
  children?: React.ReactNode;
}

export const ModuleContainer: React.FC<ModuleContainerType> = ({
  module,
  children,
}) => {
  return (
    <div
      id={module?.id ? module.id : ""}
      style={{
        scrollMargin: module?.scrollMargin,
        background: module?.background ? module?.background : "transparent",
        paddingTop: module?.paddingTop ? module.paddingTop : "0px",
        paddingBottom: module?.paddingBottom ? module.paddingBottom : "0px",
      }}
      className={`
        ${module?.hide?.small ? "hidden" : "block"}
        ${module?.hide?.medium ? "medium:hidden" : "medium:block"}
        ${module?.hide?.large ? "large:hidden" : "large:block"}
      `}
    >
      {children}
    </div>
  );
};

export default ModuleContainer;
