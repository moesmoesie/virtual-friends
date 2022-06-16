import { defineType } from "sanity";
import { moduleFields } from "../../snippets";

export default defineType({
  type: "object",
  name: "homeHowWeWorkModule",
  title: "Home How We Work Module",
  fields: moduleFields.concat([
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "text",
    },
    {
      name: "steps",
      title: "Steps",
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
