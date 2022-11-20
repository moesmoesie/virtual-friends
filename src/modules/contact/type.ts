import { z } from "zod";
import { ButtonZod } from "../../components/button/button";
import { fallback } from "../../helpers/zod";
import { ModuleZod, RichTextZod } from "../../types";

export const ContactZod = ModuleZod.extend({
  _type: z.literal("contact"),
  title: z.string().or(fallback("Contact")),
  body: RichTextZod.or(fallback("Contact Body")),
  primaryCallToAction: ButtonZod.or(fallback(undefined)),
  secondaryCallToAction: ButtonZod.or(fallback(undefined)),
});

export type ContactType = z.infer<typeof ContactZod>;
