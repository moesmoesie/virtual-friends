import { createModule } from "../helpers";

export default createModule({
  name: "about-me",
  title: "About Me",
  fields: [
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
  ],
});