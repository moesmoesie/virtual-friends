import { defineField, defineType } from "sanity";
import { createModulePreview } from "../../sanity.helpers";
import { MdOutlineArticle } from "react-icons/md";
export default defineType({
  name: "article",
  title: "Article",
  type: "document",
  icon: MdOutlineArticle,
  preview: createModulePreview("Article", MdOutlineArticle),
  groups: [
    {
      name: "module",
      title: "Module settings",
    },
  ],
  fields: [
    defineField({
      name: "body",
      type: "rich-text",
      title: "Body",
    }),
    defineField({
      name: "module",
      group: "module",
      title: "Module Settings",
      type: "module",
    }),
  ],
});
