import { moduleFields } from "../../snippets";
import { defineType } from "sanity";

export default defineType({
  type: "object",
  name: "contactModule",
  title: "Contact Module",
  fields: moduleFields.concat([
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      type: "reference",
      name: "contactForm",
      to: [{ type: "contactForm" }],
    },
    {
      type: "reference",
      name: "companyCard",
      to: [{ type: "companyCard" }],
    },
  ]),
});
