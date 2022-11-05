import React from "react";
import { z } from "zod";
import { ModuleZod } from "../../types";

export const ModuleContainer: React.FC<ModuleContainerType> = ({ module, children }) => {
  return (
    <div
      style={{
        background: module?.background ?? "transparent",
      }}
      className={`
        relative
        ${module?.hide?.small ? "hidden" : "block"}
        ${module?.hide?.medium ? "medium:hidden" : "medium:block"}
        ${module?.hide?.large ? "large:hidden" : "large:block"}
      `}
    >
      <div id={module?.identifier ?? ""} style={{ height: module?.paddingTop?.small ?? "0px", scrollMargin: module?.scrollMargin?.small ?? "0px" }} className="block medium:hidden" />
      <div id={module?.identifier ?? ""} style={{ height: module?.paddingTop?.medium ?? "0px", scrollMargin: module?.scrollMargin?.medium ?? "0px" }} className="hidden medium:block large:hidden" />
      <div id={module?.identifier ?? ""} style={{ height: module?.paddingTop?.large ?? "0px", scrollMargin: module?.scrollMargin?.large ?? "0px" }} className="hidden medium:hidden large:block" />
      {children}
      <div style={{ height: module?.paddingBottom?.small ?? "0px" }} className="block medium:hidden" />
      <div style={{ height: module?.paddingBottom?.medium ?? "0px" }} className="hidden medium:block large:hidden" />
      <div style={{ height: module?.paddingBottom?.large ?? "0px" }} className="hidden medium:hidden large:block" />
      <div />
    </div>
  );
};

export default ModuleContainer;

export interface ModuleContainerType extends z.infer<typeof ModuleZod> {
  children: React.ReactNode;
}
