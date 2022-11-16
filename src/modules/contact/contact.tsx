import React from "react";
import { Container, ModuleContainer, Button, RichText, GradientText, BuisnessCard } from "../../components";
import { ButtonZod } from "../../components/button/button";
import { ModuleZod, RichTextZod } from "../../types";
import { z } from "zod";

export const Contact: React.FC<ContactType> = (props) => {
  return (
    <ModuleContainer module={props?.module}>
      <Container>
        <div className="flex flex-col large:flex-row gap-16 medium:gap-18 large:gap-28">
          <div>
            <div className="mb-6 flex gap-4 medium:gap-10 flex-col medium:flex-row">
              <h2 className="headline-4 medium:headline-3">
                <GradientText>{props?.title}</GradientText>
              </h2>
            </div>
            <p className="body-1 max-w-2xl mb-7">
              <RichText value={props.body} />
            </p>
            <div className="flex gap-3 medium:flex-row items-start flex-col">
              {props.primaryCallToAction && (
                <div>
                  <Button {...props.primaryCallToAction} type="default" />
                </div>
              )}
              {props.secondaryCallToAction && (
                <div>
                  <Button {...props.secondaryCallToAction} type="outlined" />
                </div>
              )}
            </div>
          </div>
          <div>
            <BuisnessCard address="van Nelleweg 1" city="Rotterdam" country="Netherlands" email="mdarwesh@virtualfriends.dev" btw="NL004201207B04" kvk="86165321" postalcode="3044BC" telephone="+31683600774" />
          </div>
        </div>
      </Container>
    </ModuleContainer>
  );
};

export const ContactZod = ModuleZod.extend({
  _type: z.literal("contact"),
  title: z.string().default("Contact"),
  body: RichTextZod.default("Contact Body"),
  primaryCallToAction: ButtonZod.optional(),
  secondaryCallToAction: ButtonZod.optional(),
});

export type ContactType = z.infer<typeof ContactZod>;
