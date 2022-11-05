import { defineField, defineType } from "sanity";
import { createModulePreview } from "../../sanity.helpers";
import { CgToolbarTop } from "react-icons/cg";

export default defineType({
  name: "header",
  title: "Header",
  type: "document",
  icon: CgToolbarTop,
  preview: createModulePreview("Header", CgToolbarTop),
  groups: [
    {
      name: "module",
      title: "Module settings",
    },
  ],
  fields: [
    defineField({
      name: "logo",
      type: "image",
      title: "Logo",
    }),
    defineField({
      name: "links",
      type: "array",
      title: "Links",
      of: [{ type: "link" }],
    }),
    defineField({
      name: "module",
      group: "module",
      title: "Module Settings",
      type: "module",
    }),
  ],
});
