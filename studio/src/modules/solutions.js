import { createModule } from "../helpers";

export default createModule({
  name: "solutions",
  title: "Solutions",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "solutions",
      type: "array",
      title: "Solutions",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Title",
              name: "title",
              type: "string",
            },
            {
              title: "Body",
              name: "body",
              type: "richText",
            },
            {
              title: "Keywords",
              name: "keywords",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    },
  ],
});
