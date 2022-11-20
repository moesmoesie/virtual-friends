import { z } from "zod";
import { ButtonZod } from "../../components/button/button";
import { fallback } from "../../helpers/zod";
import { ImageZod, ModuleZod, RichTextZod } from "../../types";

export const LandingHomeZod = ModuleZod.extend({
  _type: z.literal("landing-home"),
  title: RichTextZod.or(fallback("Title")),
  subtitle: RichTextZod.or(fallback("Subtitle")),
  primaryCallToAction: ButtonZod.or(fallback(undefined)),
  secondaryCallToAction: ButtonZod.or(fallback(undefined)),
  image: ImageZod.or(fallback(undefined)),
  imageBackground: ImageZod.or(fallback(undefined)),
});

export type LandingHomeType = z.infer<typeof LandingHomeZod>;
