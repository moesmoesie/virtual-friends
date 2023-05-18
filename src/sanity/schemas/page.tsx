import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
    }),

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
        defineArrayMember({
          type: "reference",
          to: [{ type: "hero-1" }],
        }),
      ],
    }),
  ],
});
