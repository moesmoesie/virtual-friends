import { createModule } from "../helpers";

export default createModule({
  name: "sellingPoints",
  title: "Selling Points",
  fields: [
    {
      name: "sellingPoints",
      type: "array",
      title: "Selling Points",
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
              type: "text",
            },
          ],
        },
      ],
    },
  ],
});
