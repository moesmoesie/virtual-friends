import { ModuleZod, LinkZod } from "../../types";
import { z } from "zod";
import { fallback } from "../../helpers/zod";

export const FooterZod = ModuleZod.extend({
  _type: z.literal("footer"),
  links: z.array(LinkZod).or(fallback(undefined)),
});

export type FooterType = z.infer<typeof FooterZod>;
