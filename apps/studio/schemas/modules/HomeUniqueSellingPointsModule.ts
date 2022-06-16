import { defineType } from "sanity";
import { moduleFields } from "../../snippets";

export default defineType({
  type: "object",
  name: "homeUniqueSellingPointsModule",
  title: "Home Unique Selling Points Module",
  fields: moduleFields.concat([
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "uniqueSellingPoints",
      title: "Unique Selling Points",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "body",
              title: "Body",
              type: "text",
            },
          ],
        },
      ],
    },
  ]),
});
