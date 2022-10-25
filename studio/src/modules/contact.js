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
      type: "richText",
      title: "Title",
    },
    {
      name: "body",
      type: "richText",
      title: "Body",
    },
    {
      name: "primaryCallToAction",
      type: "link",
      title: "Primary Call to action",
    },
    {
      name: "secondaryCallToAction",
      type: "link",
      title: "Secondary Call to action",
    },
  ],
});
