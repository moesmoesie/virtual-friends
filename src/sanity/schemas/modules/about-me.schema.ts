import { defineField, defineType } from "sanity";
import { BsPerson } from "react-icons/bs";
import { createModulePreview } from "../../sanity.helpers";

export default defineType({
  title: "About me",
  name: "about-me",
  type: "document",
  icon: BsPerson,
  preview: createModulePreview("About me", BsPerson),
  groups: [
    {
      name: "module",
      title: "Module settings",
    },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
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
