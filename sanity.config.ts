import { createConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./lib/sanity/schemas";

export default createConfig({
  name: "default",
  title: "Virtual Friends",
  projectId: "kby5cprw",
  dataset: "production",
  plugins: [deskTool()],
  basePath: "/studio",
  schema: {
    types: schemaTypes,
  },
});
