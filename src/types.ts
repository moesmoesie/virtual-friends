import { z } from "zod";

export const ModuleZod = z.object({
  module: z
    .object({
      identifier: z.string().optional(),
      scrollMargin: z
        .object({
          small: z.string().optional(),
          medium: z.string().optional(),
          large: z.string().optional(),
        })
        .optional(),
      background: z.string().optional(),
      paddingTop: z
        .object({
          small: z.string().optional(),
          medium: z.string().optional(),
          large: z.string().optional(),
        })
        .optional(),
      paddingBottom: z
        .object({
          small: z.string().optional(),
          medium: z.string().optional(),
          large: z.string().optional(),
        })
        .optional(),
      hide: z
        .object({
          small: z.boolean().optional(),
          medium: z.boolean().optional(),
          large: z.boolean().optional(),
        })
        .optional(),
    })
    .nullable()
    .optional(),
});

export const RichTextZod = z.union([z.array(z.any()), z.string()]);

export const LinkZod = z.object({
  text: z.string().default("Link"),
  href: z.string().default("#"),
});

export const ImageZod = z.object({
  src: z.string().default(""),
  alt: z.string().default(""),
  width: z.number().default(1),
  height: z.number().default(1),
  blurDataURL: z.string().optional(),
  aspectRatio: z.number().optional(),
});

export type ImageType = z.infer<typeof ImageZod>;

export type ModuleType = z.infer<typeof ModuleZod>;
