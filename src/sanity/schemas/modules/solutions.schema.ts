import { BiBulb } from "react-icons/bi";
import { defineField, defineType } from "sanity";
import createModulePreview from "../../helpers/createModulePreview";

export default defineType({
  name: "solutions",
  title: "Solutions",
  type: "object",
  icon: BiBulb,
  preview: createModulePreview("Solutions", BiBulb),
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Content",
      of: [
        defineField({
          type: "object",
          title: "Content",
          name: "content",
          fields: [
            defineField({
              name: "title",
              type: "string",
              title: "Title",
            }),
            defineField({
              name: "variant",
              type: "string",
              title: "Variant",
              options: {
                list: [
                  { title: "Jamstack", value: "jamstack" },
                  { title: "Content Management System", value: "cms" },
                  { title: "Ecommerce", value: "ecommerce" },
                  { title: "Saas", value: "saas" },
                ],
              },
            }),
            defineField({
              name: "image",
              type: "image",
              title: "Image",
            }),
            defineField({
              name: "body",
              type: "rich-text",
              title: "Body",
            }),
            defineField({
              name: "keywords",
              type: "array",
              title: "Keywords",
              of: [
                defineField({
                  name: "keyword",
                  type: "string",
                  title: "Keyword",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "module",
      type: "module",
      title: "Module Settings",
    }),
  ],
});
