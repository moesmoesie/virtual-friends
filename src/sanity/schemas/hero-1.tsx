import { defineField, defineType } from "sanity";

export default defineType({
  name: "hero-1",
  type: "document",
  title: "Hero 1",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),

    defineField({
      name: "subtitle",
      type: "string",
      title: "Subtitle",
    }),
  ],
});
