import {
  Container,
  ModuleContainerType,
  ModuleContainer,
  GradientText,
  Chip,
} from "../../components";
import React from "react";

export interface SolutionsType extends ModuleContainerType {
  title: string;
  solutions: {
    title: string;
    body: string;
    keywords: string[];
  }[];
}

export const Solutions: React.FC<SolutionsType> = (props) => {
  return (
    <ModuleContainer module={props?.module}>
      <Container>
        <h2 className="headline-4 mb-10 medium:headline-3">
          <GradientText>{props.title}</GradientText>
        </h2>
        <div className="flex flex flex-col gap-16">
          {props.solutions.map((solution, index) => {
            return (
              <div key={index} className="flex max-w-md flex-col gap-3">
                <h3 className="headline-6 medium:headline-5">
                  {solution.title}
                </h3>
                <p className="body-2">{solution.body}</p>
                <div className="flex flex-wrap gap-2">
                  {solution.keywords.map((keyword, index) => {
                    return <Chip key={index} text={keyword} variant="active" />;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </ModuleContainer>
  );
};
