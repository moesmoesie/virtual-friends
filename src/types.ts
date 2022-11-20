import { z } from "zod";
import { fallback } from "./helpers/zod";

export const ModuleZod = z.object({
  module: z
    .object({
      identifier: z.string(),
      scrollMargin: z.object({
        small: z.string(),
        medium: z.string(),
        large: z.string(),
      }),
      background: z.string(),
      paddingTop: z.object({
        small: z.string(),
        medium: z.string(),
        large: z.string(),
      }),
      paddingBottom: z.object({
        small: z.string(),
        medium: z.string(),
        large: z.string(),
      }),
      hide: z.object({
        small: z.boolean(),
        medium: z.boolean(),
        large: z.boolean(),
      }),
    })
    .deepPartial()
    .or(fallback(null)),
});

export const RichTextZod = z.union([z.array(z.any()), z.string()]);

export const LinkZod = z.object({
  text: z.string().or(fallback("Link")),
  href: z.string().or(fallback("#")),
});

export const ImageZod = z.object({
  src: z.string().or(fallback("")),
  alt: z.string().or(fallback("Alt")),
  width: z.number().or(fallback(100)),
  height: z.number().or(fallback(100)),
  title: z.string().or(fallback(undefined)),
  blurDataURL: z.string().or(fallback(undefined)),
  aspectRatio: z.number().or(fallback(undefined)),
});

export type ImageType = z.infer<typeof ImageZod>;
export type ModuleType = z.infer<typeof ModuleZod>;
