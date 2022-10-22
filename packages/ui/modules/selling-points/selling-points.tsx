import {
  Container,
  ModuleContainerType,
  ModuleContainer,
  Card,
  Image,
} from "../../components";
import React from "react";

export interface SellingPointsType extends ModuleContainerType {
  sellingPoints: {
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
          {props?.sellingPoints?.map((card, index) => {
            return (
              <div key={index}>
                <div className="hidden large:block">
                  <Card
                    mode="vertical"
                    size="large"
                    {...card}
                    icon={<Image {...card?.icon} width="200" />}
                  />
                </div>

                <div className="large:hidden">
                  <Card
                    mode="horizontal"
                    size="normal"
                    {...card}
                    icon={<Image {...card?.icon} width="200" />}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </ModuleContainer>
  );
};
