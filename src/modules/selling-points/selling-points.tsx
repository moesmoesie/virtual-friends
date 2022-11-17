import React from "react";
import { ModuleZod } from "../../types";
import { ImageZod } from "../../types";
import { z } from "zod";
import Image from "next/image";
import { Card } from "../../components/card/card";
import Container from "../../components/container/container";
import ModuleContainer from "../../components/module-container/module-container";

export const SellingPoints: React.FC<SellingPointsType> = (props) => {
  return (
    <ModuleContainer module={props?.module}>
      <Container>
        <div className="grid gap-3 medium:grid-cols-2 large:grid-cols-3">
          {props.sellingPoints.map((card, index) => {
            return (
              <div key={index}>
                <div className="hidden large:block">
                  <Card mode="vertical" size="large" {...card} icon={<Image {...card.icon} width="200" />} />
                </div>

                <div className="large:hidden">
                  <Card mode="horizontal" size="normal" {...card} icon={<Image {...card.icon} width="200" />} />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </ModuleContainer>
  );
};

export const SellingPointsZod = ModuleZod.extend({
  _type: z.literal("sellingPoints"),
  sellingPoints: z
    .array(
      z.object({
        title: z.string().default("Title"),
        body: z.string().default("Body"),
        icon: ImageZod.default({}),
      })
    )
    .default([]),
});

export type SellingPointsType = z.infer<typeof SellingPointsZod>;
