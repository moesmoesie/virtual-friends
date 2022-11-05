import { Image, Button, Container, ModuleContainer, RichText, ButtonZod, ImageZod } from "../../components";
import React from "react";
import { motion } from "framer-motion";
import { ModuleZod } from "../../types";
import { z } from "zod";
import { RichTextZod } from "../../types";

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
              <Image withPlaceholder={true} lazy={false} className="w-full h-full absolute top-0 left-0 object-cover pointer-events-none" {...props?.imageBackground} width="600" />

              <Image lazy={false} className={`scale-95 origin-bottom w-full h-full z-50 object-cover transition-transform`} {...props?.image} width="600" alt="Headshot of Mustafa" />
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
              <Button {...props.primaryCallToAction} type="default" />
              <Button {...props.secondaryCallToAction} type="outlined" />
            </div>
          </div>
        </div>
      </Container>
    </ModuleContainer>
  );
};

export const LandingHomeZod = ModuleZod.extend({
  _type: z.literal("landing-home"),
  title: RichTextZod,
  subtitle: RichTextZod,
  primaryCallToAction: ButtonZod,
  secondaryCallToAction: ButtonZod,
  image: ImageZod,
  imageBackground: ImageZod,
});

export type LandingHomeType = z.infer<typeof LandingHomeZod>;
