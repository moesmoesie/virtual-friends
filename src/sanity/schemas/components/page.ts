import { defineType, defineField } from "sanity";
import { CgWebsite } from "react-icons/cg";
const AllModuleTypes = ["solutions", "about-me", "article", "contact", "footer", "header", "landing-home", "sellingPoints", "spacer"];

export default defineType({
  name: "page",
  type: "document",
  title: "Page",
  icon: CgWebsite,
  groups: [
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "seo",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      group: "seo",
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      group: "seo",
    }),
    defineField({
      name: "modules",
      title: "Modules",
      type: "array",
      of: [
        {
          type: "reference",
          to: AllModuleTypes.map((schema) => ({ type: schema })),
        },
      ],
    }),
  ],
});
