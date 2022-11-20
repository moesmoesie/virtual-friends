import React from "react";
import ModuleContainer from "../../components/module-container/module-container";
import { SpacerType } from "./type";

export const Spacer: React.FC<SpacerType> = (props) => {
  return (
    <ModuleContainer module={props.module}>
      <></>
    </ModuleContainer>
  );
};
