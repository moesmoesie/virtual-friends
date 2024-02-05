import React from "react";
import Container from "../../components/container/container";
import { GradientText } from "../../components/gradient-text/gradient-text";
import ModuleContainer from "../../components/module-container/module-container";
import { SolutionCMS } from "./components/cms";
import { SolutionEcommerce } from "./components/eccomerce";
import { SolutionJamstack } from "./components/jamstack";
import { SolutionSaas } from "./components/saas";
import { SolutionsType } from "./type";

export const Solutions: React.FC<SolutionsType> = (props) => {
  return (
    <ModuleContainer module={props.module}>
      <Container>
        {props.title && (
          <h2 className="headline-4 mb-10 medium:headline-3">
            <GradientText>{props.title}</GradientText>
          </h2>
        )}
        <div className="flex flex-col gap-16">
          {props?.content?.map((solution, index) => {
            const isReversed = index % 2 == 1;
            switch (solution.variant) {
              case "cms":
                return <SolutionCMS key={index} content={solution} isReversed={isReversed} />;
              case "ecommerce":
                return <SolutionEcommerce key={index} content={solution} isReversed={isReversed} />;
              case "saas":
                return <SolutionSaas key={index} content={solution} isReversed={isReversed} />;
              case "jamstack":
                return <SolutionJamstack key={index} content={solution} isReversed={isReversed} />;
            }
          })}
        </div>
      </Container>
    </ModuleContainer>
  );
};
