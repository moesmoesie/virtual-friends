import { defineField } from "sanity";
import createModulePreview from "../../helpers/createModulePreview";
import { AiOutlineHome } from "react-icons/ai";

export default defineField({
  name: "landing-home",
  type: "object",
  title: "Landing Home",
  icon: AiOutlineHome,
  preview: createModulePreview("Landing Home", AiOutlineHome),
  fields: [
    defineField({
      name: "title",
      type: "rich-text",
      title: "Title",
    }),
    defineField({
      name: "subtitle",
      type: "rich-text",
      title: "Subtitle",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
    }),
    defineField({
      name: "imageBackground",
      type: "image",
      title: "Image Background",
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
