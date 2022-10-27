import {
  ImageType,
  Image,
  Button,
  Container,
  ModuleContainerType,
  ModuleContainer,
  RichText,
  ButtonType,
} from "../../components";
import React from "react";

export interface LandingHomeType extends ModuleContainerType {
  title: string | JSX.Element;
  subtitle: string | JSX.Element;
  primaryCallToAction: ButtonType;
  secondaryCallToAction: ButtonType;
  image: ImageType;
  imageBackground: ImageType;
}

export const LandingHome: React.FC<LandingHomeType> = (props) => {
  return (
    <ModuleContainer module={props?.module}>
      <Container>
        <div className="text-center min-h-[80vh] large:text-left flex flex-col items-center justify-center gap-12 large:flex-row">
          <div className="rounded-full relative overflow-hidden medium:w-[250px] medium:h-[250px] large:w-[320px] large:h-[320px] object-cover w-[200px] h-[200px]">
            <div className="absolute left-0 top-0 h-full w-full">
              <div className="w-full h-full">
                <Image
                  className="w-full h-full object-cover pointer-events-none"
                  {...props?.imageBackground}
                  width="600"
                />
              </div>
            </div>

            <Image
              className="absolute left-0 scale-95 origin-bottom top-0 w-full h-full object-cover"
              {...props?.image}
              width="600"
              alt="Headshot of Mustafa"
            />
          </div>

          <div className="flex flex-col max-w-md medium:max-w-2xl gap-8 items-center large:items-start justify-center">
            <h1 className="headline-4 medium:headline-2 large:headline-1">
              <RichText value={props.title} />
            </h1>
            <p className="body-2 medium:body-large">
              <RichText value={props.subtitle} />
            </p>

            <div className="flex gap-3">
              <Button {...props.primaryCallToAction} type="default" />
              <Button {...props.secondaryCallToAction} type="outlined" />
            </div>
          </div>
        </div>
      </Container>
    </ModuleContainer>
  );
};
