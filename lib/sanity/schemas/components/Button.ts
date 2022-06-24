import { defineType } from "sanity";
import { componentFields } from "../../snippets";

export default defineType({
  type: "document",
  name: "button",
  title: "Button",
  fields: componentFields.concat([
    {
      type: "string",
      name: "content",
      title: "Content",
      validation: (rule) => rule.required(),
    },
  ]),
});
