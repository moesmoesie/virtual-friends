import { createConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

export default createConfig({
  name: "default",
  title: "Virtual Friends",
  projectId: "kby5cprw",
  dataset: "production",
  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
