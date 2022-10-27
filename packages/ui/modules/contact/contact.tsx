import {
  Container,
  ModuleContainerType,
  ModuleContainer,
  ImageType,
  BuisnessCardType,
  GradientText,
  Image,
  Button,
  BuisnessCard,
  RichText,
  ButtonType,
} from "../../components";
import React from "react";

export interface ContactType extends ModuleContainerType {
  title: any;
  body: string | JSX.Element;
  primaryCallToAction: ButtonType;
  secondaryCallToAction: ButtonType;
  image: ImageType;
  buisnessCard: BuisnessCardType;
}

export const Contact: React.FC<ContactType> = (props) => {
  return (
    <ModuleContainer module={props?.module}>
      <Container>
        <div className="flex flex-col large:flex-row gap-16 medium:gap-18 large:gap-28">
          <div>
            <div className="mb-6 flex gap-4 medium:gap-10 flex-col medium:flex-row">
              <h2 className="headline-4 medium:headline-3">
                <RichText value={props.title} />
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
            <BuisnessCard {...props.buisnessCard} />
          </div>
        </div>
      </Container>
    </ModuleContainer>
  );
};
