import {
  Container,
  ModuleContainerType,
  ModuleContainer,
  GradientText,
} from "../../components";
import React from "react";

export interface AboutMeType extends ModuleContainerType {
  title: string;
  body: string | JSX.Element;
}

export const AboutMe: React.FC<AboutMeType> = (props) => {
  return (
    <ModuleContainer module={props?.module}>
      <Container>
        <h2 className="headline-3 mb-8">
          <GradientText>{props.title}</GradientText>
        </h2>
        <p className="font-body body-1 max-w-md  medium:max-w-3xl !medium:text-[32px] !text-[28px]">
          {props.body}
        </p>
      </Container>
    </ModuleContainer>
  );
};
