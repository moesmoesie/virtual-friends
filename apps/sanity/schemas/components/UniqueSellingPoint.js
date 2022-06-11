import { createComponent } from "../../utils";

export default createComponent({
  name: "uniqueSellingPoint",
  title: "Unique Selling Point",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "text",
    },
  ],
});
