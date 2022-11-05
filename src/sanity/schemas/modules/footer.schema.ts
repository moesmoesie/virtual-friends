import { defineField, defineType } from "sanity";
import { createModulePreview } from "../../sanity.helpers";
import { CgToolbarBottom } from "react-icons/cg";

export default defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  icon: CgToolbarBottom,
  preview: createModulePreview("Footer", CgToolbarBottom),
  groups: [
    {
      name: "module",
      title: "Module settings",
    },
  ],
  fields: [
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
