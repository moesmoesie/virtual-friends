import { defineType } from "sanity";

export default defineType({
  type: "document",
  title: "Privacy Policy",
  name: "privacyPolicyPage",
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
