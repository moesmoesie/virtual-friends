import { defineField, defineType } from "sanity";
import createModulePreview from "../../helpers/createModulePreview";
import { CgToolbarBottom } from "react-icons/cg";

export default defineType({
  name: "footer",
  title: "Footer",
  type: "object",
  icon: CgToolbarBottom,
  preview: createModulePreview("Footer", CgToolbarBottom),
  fields: [
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
