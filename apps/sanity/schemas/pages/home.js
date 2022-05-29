import { AiOutlineHome } from "react-icons/ai";
import createPageComponent from "../../utils/createPageComponent";
import { homeModules, generalModules } from "../modules";

export default createPageComponent({
  name: "homePage",
  title: "Home",
  slug: "",
  isHomePage: true,
  props: {
    icon: AiOutlineHome,
  },
  fields: [
    {
      name: "modules",
      title: "Modules",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            ...homeModules.map((el) => {
              return { type: el.name };
            }),

            ...generalModules.map((el) => {
              return { type: el.name };
            }),
          ],
        },
      ],
    },
  ],
});
