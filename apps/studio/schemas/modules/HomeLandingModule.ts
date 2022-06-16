import { defineType } from "sanity";
import { moduleFields } from "../../snippets";

export default defineType({
  name: "homeLandingModule",
  title: "Home Landing Module",
  type: "object",
  fields: moduleFields.concat([
    {
      name: "title",
      title: "Title",
      type: "textEditor",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "textEditor",
    },
    {
      name: "button",
      title: "Call To Action",
      type: "reference",
      to: [{ type: "button" }],
    },
  ]),
});
