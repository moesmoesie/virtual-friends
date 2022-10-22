import { createModule } from "../helpers";

export default createModule({
  name: "contact",
  title: "Contact",
  fields: [
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "body",
      type: "richText",
      title: "Body",
    },
    {
      name: "primaryCallToAction",
      type: "string",
      title: "Primary Call to action",
    },
    {
      name: "secondaryCallToAction",
      type: "string",
      title: "Secondary Call to action",
    },
  ],
});
