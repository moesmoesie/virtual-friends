import { z } from "zod";
import { fallback } from "../../helpers/zod";
import { ModuleZod, ImageZod } from "../../types";

export const SellingPointsZod = ModuleZod.extend({
  _type: z.literal("sellingPoints"),
  sellingPoints: z
    .array(
      z.object({
        title: z.string().or(fallback("Title")),
        body: z.string().or(fallback("Body")),
        icon: ImageZod.or(fallback(undefined)),
      })
    )
    .or(fallback(undefined)),
});

export type SellingPointsType = z.infer<typeof SellingPointsZod>;
