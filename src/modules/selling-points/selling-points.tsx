import { Container, ModuleContainer, Card, Image } from "../../components";
import React from "react";
import { ModuleZod } from "../../types";
import { ImageZod } from "../../components";
import { z } from "zod";

export const SellingPoints: React.FC<SellingPointsType> = (props) => {
  return (
    <ModuleContainer module={props?.module}>
      <Container>
        <div className="grid gap-3 medium:grid-cols-2 large:grid-cols-3">
          {props?.sellingPoints?.map((card, index) => {
            return (
              <div key={index}>
                <div className="hidden large:block">
                  <Card mode="vertical" size="large" {...card} icon={<Image {...card?.icon} width="200" />} />
                </div>

                <div className="large:hidden">
                  <Card mode="horizontal" size="normal" {...card} icon={<Image {...card?.icon} width="200" />} />
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
  sellingPoints: z.array(
    z.object({
      title: z.string(),
      body: z.string(),
      icon: ImageZod,
    })
  ),
});

export type SellingPointsType = z.infer<typeof SellingPointsZod>;
