import { z } from "zod";
import { fallback } from "../../helpers/zod";
import { ModuleZod, RichTextZod, ImageZod } from "../../types";

export const ContentZod = z.object({
  title: z.string().or(fallback("Title")),
  body: RichTextZod.or(fallback("Body")),
  keywords: z.array(z.string()).or(fallback(undefined)),
  image: ImageZod.or(fallback(undefined)),
  variant: z.union([z.literal("cms"), z.literal("ecommerce"), z.literal("saas"), z.literal("jamstack")]).or(fallback("cms")),
});

export const SolutionsZod = ModuleZod.extend({
  _type: z.literal("solutions"),
  title: z.string().or(fallback("Title")),
  content: z.array(ContentZod).or(fallback(undefined)),
});

export interface SolutionType {
  isReversed: boolean;
  content: ContentType;
  children?: JSX.Element;
}

export type ContentType = z.infer<typeof ContentZod>;

export type SolutionsType = z.infer<typeof SolutionsZod>;
