import { ModuleZod, RichTextZod } from "../../types";
import { z } from "zod";
import { fallback } from "../../helpers/zod";

export const AboutMeZod = ModuleZod.extend({
  _type: z.literal("about-me"),
  title: z.string().or(fallback("About Me")),
  body: RichTextZod.or(fallback("About Me Body")),
});

export type AboutMeType = z.infer<typeof AboutMeZod>;
