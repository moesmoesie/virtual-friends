import {
  Container,
  ModuleContainerType,
  ModuleContainer,
  RichText,
} from "../../components";
import React from "react";

export interface AboutMeType extends ModuleContainerType {
  title: any;
  body: any;
}

export const AboutMe: React.FC<AboutMeType> = (props) => {
  return (
    <ModuleContainer module={props?.module}>
      <Container>
        <h2 className="headline-3 mb-8">
          <RichText value={props?.title} />
        </h2>
        <p className="font-body body-1 max-w-md  medium:max-w-3xl !medium:text-[32px] !text-[28px]">
          <RichText value={props?.body} />
        </p>
      </Container>
    </ModuleContainer>
  );
};
