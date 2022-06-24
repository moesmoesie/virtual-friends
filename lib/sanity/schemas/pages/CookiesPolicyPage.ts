import { defineType } from "sanity";

export default defineType({
  type: "document",
  title: "Cookies Policy",
  name: "cookiesPolicyPage",
  fields: [
    {
      type: "slug",
      name: "slug",
      title: "Slug",
    },
    {
      type: "textEditor",
      name: "body",
      title: "Body",
    },
  ],
});
