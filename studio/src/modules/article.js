import { createModule } from "../helpers";

export default createModule({
  name: "article",
  title: "Article",
  fields: [
    {
      name: "article",
      type: "text",
      title: "Article",
    },
  ],
});
