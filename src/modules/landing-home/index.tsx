import React from "react";
import { motion } from "framer-motion";
import getCustomImageLoader from "../../sanity/helpers/getCustomImageLoader";
import Image from "next/image";
import { Button } from "../../components/button/button";
import Container from "../../components/container/container";
import ModuleContainer from "../../components/module-container/module-container";
import { RichText } from "../../components/rich-text/rich-text";
import { LandingHomeType } from "./type";

export const LandingHome: React.FC<LandingHomeType> = (props) => {
  return (
    <ModuleContainer module={props?.module}>
      <Container>
        <div className="text-center min-h-[80vh] large:text-left flex flex-col items-center justify-center gap-12 large:flex-row">
          <div className="flex flex-col max-w-md medium:max-w-2xl gap-8 items-center large:items-start justify-center">
            <h1 className="headline-4 medium:headline-2 large:headline-1">
              <RichText value={props.title} />
            </h1>
            <p className="body-2 medium:body-large">
              <RichText value={props.subtitle} />
            </p>

            <div className="flex gap-3">
              {props.primaryCallToAction && <Button {...props.primaryCallToAction} type="default" />}
              {props.secondaryCallToAction && <Button {...props.secondaryCallToAction} type="outlined" />}
            </div>
          </div>
        </div>
      </Container>
    </ModuleContainer>
  );
};
