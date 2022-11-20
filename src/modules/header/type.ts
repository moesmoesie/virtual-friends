import { z } from "zod";
import { fallback } from "../../helpers/zod";
import { ModuleZod, ImageZod, LinkZod } from "../../types";

export const HeaderZod = ModuleZod.extend({
  _type: z.literal("header"),
  logo: ImageZod,
  links: z.array(LinkZod).or(fallback(undefined)),
});

export type HeaderType = z.infer<typeof HeaderZod>;
