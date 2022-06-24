import { defineType } from "sanity";
import * as modules from "../modules";

export default defineType({
  title: "Home",
  type: "document",
  name: "homePage",
  fields: [
    {
      name: "modules",
      title: "Modules",
      type: "array",
      of: Object.values(modules).map((el) => {
        return {
          title: el.title,
          type: el.name,
        };
      }),
    },
  ],
});
