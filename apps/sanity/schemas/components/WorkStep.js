import { createComponent } from "../../utils";

export default createComponent({
  name: "workStep",
  title: "Work Step",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "textEditor",
    },
  ],
});
