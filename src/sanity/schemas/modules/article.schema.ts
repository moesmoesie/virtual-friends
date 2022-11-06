import { defineField, defineType } from "sanity";
import { createModulePreview } from "../../sanity.helpers";
import { MdOutlineArticle } from "react-icons/md";
export default defineType({
  name: "article",
  title: "Article",
  type: "object",
  icon: MdOutlineArticle,
  preview: createModulePreview("Article", MdOutlineArticle),
  fields: [
    defineField({
      name: "body",
      type: "text",
      title: "Body",
    }),
    defineField({
      name: "module",
      title: "Module Settings",
      type: "module",
    }),
  ],
});
