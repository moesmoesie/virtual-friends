import { createModule } from "../helpers";

export default createModule({
  name: "footer",
  title: "Footer",
  type: "object",
  fields: [
    {
      name: "links",
      type: "array",
      title: "Links",
      of: [{ type: "link" }],
    },
  ],
});
