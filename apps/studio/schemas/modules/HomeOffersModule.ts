import { defineType } from "sanity";
import { moduleFields } from "../../snippets";

export default defineType({
  type: "object",
  name: "homeOffersModule",
  title: "Home Offers Module",
  fields: moduleFields.concat([
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "offers",
      title: "Offers",
      type: "array",
      of: [
        {
          type: "object",
          title: "Offer",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "content",
              title: "Content",
              type: "textEditor",
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
  ]),
});
