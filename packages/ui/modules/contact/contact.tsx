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
} from "../../components";
import React from "react";

export interface ContactType extends ModuleContainerType {
  title: string;
  body: string | JSX.Element;
  primaryCallToAction: string;
  secondaryCallToAction: string;
  image: ImageType;
  buisnessCard: BuisnessCardType;
}

export const Contact: React.FC<ContactType> = (props) => {
  return (
    <ModuleContainer module={props?.module}>
      <Container>
        <div className="flex flex-col large:flex-row gap-16 medium:gap-18 large:gap-28">
          <div>
            <div className="mb-6 flex gap-4 medium:gap-10 flex-col medium:flex-row items-center">
              <Image
                className="w-[130px] h-[130px] rounded-full object-cover"
                {...props.image}
              />
              <h2 className="headline-3">
                <GradientText>{props.title}</GradientText>
              </h2>
            </div>

            <p className="body-1 max-w-2xl mb-7">{props.body}</p>
            <div className="flex gap-3 medium:flex-row flex-col">
              <div>
                <Button text={props.primaryCallToAction} type="default" />
              </div>
              <div>
                <Button text={props.secondaryCallToAction} type="outlined" />
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
