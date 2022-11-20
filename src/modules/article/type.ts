import { ModuleZod } from "../../types";
import { z } from "zod";
import { fallback } from "../../helpers/zod";

export const ArticleZod = ModuleZod.extend({
  _type: z.literal("article"),
  body: z.string().or(fallback("Article Body")),
});

export type ArticleType = z.infer<typeof ArticleZod>;
