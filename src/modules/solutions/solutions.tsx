import React from "react";
import { z } from "zod";
import { Container, GradientText, Image, ModuleContainer } from "../../components";
import { ModuleZod } from "../../types";
import { SolutionCMS } from "./solutions.cms";
import { ContentZod } from "./solutions.content";
import { SolutionEcommerce } from "./solutions.eccomerce";
import { SolutionSaas } from "./solutions.saas";

export const Solutions: React.FC<SolutionsType> = (props) => {
  return (
    <ModuleContainer module={props.module}>
      <Container>
        <h2 className="headline-4 mb-10 medium:headline-3">
          <GradientText>{props.title}</GradientText>
        </h2>
        <div className="flex flex-col gap-16">
          {props.content.map((solution, index) => {
            const isReversed = index % 2 == 1;
            switch (solution.variant) {
              case "cms":
                return <SolutionCMS key={index} content={solution} isReversed={isReversed} />;
              case "ecommerce":
                return <SolutionEcommerce key={index} content={solution} isReversed={isReversed} />;
              case "saas":
                return <SolutionSaas key={index} content={solution} isReversed={isReversed} />;
              case "jamstack":
                return <SolutionEcommerce key={index} content={solution} isReversed={isReversed} />;
            }
          })}
        </div>
      </Container>
    </ModuleContainer>
  );
};

export const SolutionsZod = ModuleZod.extend({
  _type: z.literal("solutions"),
  title: z.string().optional(),
  content: z.array(ContentZod),
});

export type SolutionsType = z.infer<typeof SolutionsZod>;
