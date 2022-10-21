import {
  Container,
  ModuleContainerType,
  ModuleContainer,
  Card,
} from "../../components";
import React from "react";

export interface SellingPointsType extends ModuleContainerType {
  cards: {
    title: string;
    body: string;
    icon: JSX.Element;
  }[];
}

export const SellingPoints: React.FC<SellingPointsType> = (props) => {
  return (
    <ModuleContainer module={props?.module}>
      <Container>
        <div className="grid gap-3 medium:grid-cols-2 large:grid-cols-3">
          {props?.cards.map((card) => {
            return (
              <div>
                <div className="hidden large:block">
                  <Card mode="vertical" size="large" {...card} />
                </div>

                <div className="large:hidden">
                  <Card mode="horizontal" size="normal" {...card} />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </ModuleContainer>
  );
};
