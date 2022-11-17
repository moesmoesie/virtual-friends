import React from "react";
import { motion } from "framer-motion";
import { ModuleZod } from "../../types";
import { z } from "zod";
import { RichTextZod } from "../../types";
import { ImageZod } from "../../types";
import getCustomImageLoader from "../../sanity/helpers/getCustomImageLoader";
import Image from "next/image";
import { Button, ButtonZod } from "../../components/button/button";
import Container from "../../components/container/container";
import ModuleContainer from "../../components/module-container/module-container";
import { RichText } from "../../components/rich-text/rich-text";

export const LandingHome: React.FC<LandingHomeType> = (props) => {
  return (
    <ModuleContainer module={props?.module}>
      <Container>
        <div className="text-center min-h-[80vh] large:text-left flex flex-col items-center justify-center gap-12 large:flex-row">
          <motion.div
            initial={{ y: 64, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-full relative overflow-hidden medium:w-[250px] medium:h-[250px] large:w-[320px] large:h-[320px] object-cover w-[200px] h-[200px]"
          >
            <motion.div className="w-full rounded-full overflow-hiddens relative h-full">
              {props.imageBackground && <Image {...props?.imageBackground} width={400} priority className="w-full h-full absolute top-0 left-0 object-cover pointer-events-none" />}
              <Image loader={getCustomImageLoader} {...props.image} width={200} priority className="w-full absolute bottom-0" />
            </motion.div>
          </motion.div>

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

export const LandingHomeZod = ModuleZod.extend({
  _type: z.literal("landing-home"),
  title: RichTextZod.default("Mustafa Darwesh"),
  subtitle: RichTextZod.default("Full Stack Developer"),
  primaryCallToAction: ButtonZod.optional(),
  secondaryCallToAction: ButtonZod.optional(),
  image: ImageZod,
  imageBackground: ImageZod.optional(),
});

export type LandingHomeType = z.infer<typeof LandingHomeZod>;
