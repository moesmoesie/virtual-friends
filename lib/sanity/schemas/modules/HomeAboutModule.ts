import { defineType } from "sanity";
import { moduleFields } from "../../snippets";

export default defineType({
  type: "object",
  name: "homeAboutModule",
  title: "Home About Module",
  fields: moduleFields.concat([
    {
      name: "design_title",
      title: "Design Title",
      type: "string",
    },
    {
      name: "design_content",
      title: "Design Content",
      type: "textEditor",
    },
    {
      name: "develop_title",
      title: "Develop Title",
      type: "string",
    },
    {
      name: "develop_content",
      title: "Develop Content",
      type: "textEditor",
    },
  ]),
});
