import { type SchemaTypeDefinition } from "sanity";
import hero1 from "./schemas/hero-1";
import page from "./schemas/page";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero1, page],
};
