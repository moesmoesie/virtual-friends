import React from "react";
import Image from "next/image";
import { Card } from "../../components/card/card";
import Container from "../../components/container/container";
import ModuleContainer from "../../components/module-container/module-container";
import { SellingPointsType } from "./type";

export const SellingPoints: React.FC<SellingPointsType> = (props) => {
  return (
    <ModuleContainer module={props?.module}>
      <Container>
        <div className="grid gap-3 medium:grid-cols-2 large:grid-cols-3">
          {props.sellingPoints &&
            props.sellingPoints.map((card, index) => {
              return (
                <div key={index}>
                  <div className="hidden large:block">
                    <Card mode="vertical" size="large" {...card} icon={card.icon ? <Image {...card.icon} width="200" /> : <div />} />
                  </div>

                  <div className="large:hidden">
                    <Card mode="horizontal" size="normal" {...card} icon={card.icon ? <Image {...card.icon} width="200" /> : <div />} />
                  </div>
                </div>
              );
            })}
        </div>
      </Container>
    </ModuleContainer>
  );
};
