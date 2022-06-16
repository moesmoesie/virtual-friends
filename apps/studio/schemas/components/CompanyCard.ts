import { defineType } from "sanity";
import { componentFields } from "../../snippets";

export default defineType({
  type: "document",
  name: "companyCard",
  title: "Company Card",
  fields: componentFields.concat([
    {
      type: "string",
      name: "content",
      title: "Content",
    },
  ]),
});
