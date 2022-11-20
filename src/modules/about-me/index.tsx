import React from "react";
import Container from "../../components/container/container";
import { GradientText } from "../../components/gradient-text/gradient-text";
import ModuleContainer from "../../components/module-container/module-container";
import { RichText } from "../../components/rich-text/rich-text";
import { AboutMeType } from "./type";

const AboutMe: React.FC<AboutMeType> = (props) => {
  return (
    <ModuleContainer module={props?.module}>
      <Container>
        <h2 className="headline-4 medium:headline-3 mb-8">
          <GradientText>{props.title}</GradientText>
        </h2>
        <p className="font-body body-1 max-w-md  medium:max-w-3xl !medium:text-[32px] !text-[28px]">
          <RichText value={props.body} />
        </p>
      </Container>
    </ModuleContainer>
  );
};

export default AboutMe;
