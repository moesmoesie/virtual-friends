import { createModule } from "../helpers";

export default createModule({
  name: "landing-home",
  title: "Landing Home",
  fields: [
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "imageBackground",
      type: "image",
      title: "Image Background",
      options: {
        hotspot: true,
      },
    },
    {
      name: "title",
      type: "richText",
      title: "Title",
    },
    {
      name: "subtitle",
      type: "richText",
      title: "Subtitle",
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
