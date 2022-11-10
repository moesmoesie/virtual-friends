import { defineType, defineField } from "sanity";
import { CgWebsite } from "react-icons/cg";
const AllModuleTypes = ["solutions", "about-me", "article", "contact", "footer", "header", "landing-home", "sellingPoints", "spacer"];

export default defineType({
  name: "page",
  type: "document",
  title: "Page",
  icon: CgWebsite,
  preview: {
    select: {
      title: "slug.current",
      subtitle: "title",
    },
  },
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
      name: "modules",
      title: "Modules",
      type: "array",
      of: AllModuleTypes.map((schema) => ({ type: schema })),
    }),
    defineField({
      group: "seo",
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
});
