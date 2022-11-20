import { ModuleZod } from "../../types";
import { z } from "zod";

export const SpacerZod = ModuleZod.extend({
  _type: z.literal("spacer"),
});

export type SpacerType = z.infer<typeof SpacerZod>;
