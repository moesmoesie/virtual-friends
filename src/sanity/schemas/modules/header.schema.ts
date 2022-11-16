import { defineField, defineType } from "sanity";
import createModulePreview from "../../helpers/createModulePreview";
import { CgToolbarTop } from "react-icons/cg";

export default defineType({
  name: "header",
  title: "Header",
  type: "object",
  icon: CgToolbarTop,
  preview: createModulePreview("Header", CgToolbarTop),
  fields: [
    defineField({
      name: "logo",
      type: "image",
      title: "Logo",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Caption",
        },
        {
          name: "alt",
          type: "string",
          title: "Attribution",
        },
      ],
    }),
    defineField({
      name: "links",
      type: "array",
      title: "Links",
      of: [{ type: "link" }],
    }),
    defineField({
      name: "module",
      title: "Module Settings",
      type: "module",
    }),
  ],
});
