import { AiOutlineHome } from "react-icons/ai";
import { createPage } from "../../utils";
import * as modules from "../modules";

export default createPage({
  name: "homePage",
  title: "Home",
  slug: "",
  isHomePage: true,
  icon: AiOutlineHome,
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
