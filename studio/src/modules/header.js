import { createModule } from "../helpers";

export default createModule({
  name: "header",
  title: "Header",
  type: "object",
  fields: [
    {
      name: "logo",
      type: "image",
      title: "Logo",
    },
    {
      name: "links",
      type: "array",
      title: "Links",
      of: [{ type: "string" }],
    },
  ],
});
