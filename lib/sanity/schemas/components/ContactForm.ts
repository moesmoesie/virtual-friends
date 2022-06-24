import { defineType } from "sanity";
import { componentFields } from "../../snippets";

export default defineType({
  type: "document",
  name: "contactForm",
  title: "Contact Form",
  fields: componentFields.concat([]),
});
