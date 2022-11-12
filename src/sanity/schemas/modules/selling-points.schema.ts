import { defineType, defineField } from "sanity";
import createModulePreview from "../../helpers/createModulePreview";
import { MdOutlineAttachMoney } from "react-icons/md";

export default defineType({
  name: "sellingPoints",
  title: "Selling points",
  type: "object",
  icon: MdOutlineAttachMoney,
  preview: createModulePreview("Selling Points", MdOutlineAttachMoney),
  fields: [
    defineField({
      name: "sellingPoints",
      type: "array",
      title: "Selling Points",
      of: [
        defineField({
          name: "sellingPoint",
          type: "object",
          fields: [
            defineField({
              title: "Icon",
              name: "icon",
              type: "image",
            }),
            defineField({
              title: "Title",
              name: "title",
              type: "string",
            }),
            defineField({
              title: "Body",
              name: "body",
              type: "text",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "module",
      title: "Module Settings",
      type: "module",
    }),
  ],
});
