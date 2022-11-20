import { z } from "zod";
import { ModuleZod } from "../../types";

export interface ModuleContainerType extends z.infer<typeof ModuleZod> {
  children: React.ReactNode;
}
