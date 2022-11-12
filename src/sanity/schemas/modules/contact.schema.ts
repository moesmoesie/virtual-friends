import { defineType, defineField } from "sanity";
import createModulePreview from "../../helpers/createModulePreview";
import { AiOutlinePhone } from "react-icons/ai";

export default defineType({
  name: "contact",
  title: "Contact",
  type: "object",
  icon: AiOutlinePhone,
  preview: createModulePreview("Contact", AiOutlinePhone),
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
      name: "image",
      type: "image",
      title: "Image",
    }),
    defineField({
      name: "primaryCallToAction",
      type: "link",
      title: "Primary Call to action",
    }),
    defineField({
      name: "secondaryCallToAction",
      type: "link",
      title: "Secondary Call to action",
    }),
    defineField({
      name: "module",
      title: "Module Settings",
      type: "module",
    }),
  ],
});
