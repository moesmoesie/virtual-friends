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
              <div>
                <Button {...props.primaryCallToAction} type="default" />
              </div>
              <div>
                <Button {...props.secondaryCallToAction} type="outlined" />
              </div>
            </div>
          </div>
          <div>
            <BuisnessCard address="van Nelleweg 1" city="Rotterdam" country="Netherlands" email="mndarwesh@virtualfriends.dev" btw="NL001234567B01" kvk="12345678" postalcode="3044BC" telephone="+31683600774" />
          </div>
        </div>
      </Container>
    </ModuleContainer>
  );
};

export const ContactZod = ModuleZod.extend({
  _type: z.literal("contact"),
  title: z.string(),
  body: RichTextZod,
  primaryCallToAction: ButtonZod,
  secondaryCallToAction: ButtonZod,
});

export type ContactType = z.infer<typeof ContactZod>;
