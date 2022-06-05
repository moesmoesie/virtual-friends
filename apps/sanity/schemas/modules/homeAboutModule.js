import createModule from "../../utils/createModule";
import { AiOutlineHome } from "react-icons/ai";

export default createModule({
  name: "homeAboutModule",
  title: "Home About Module",
  subtitle: "Home",
  previewTitle: "About Module",
  icon: AiOutlineHome,
  fields: [
    {
      name: "design_title",
      title: "Design Title",
      type: "string",
    },
    {
      name: "design_content",
      title: "Design Content",
      type: "textEditor",
    },
    {
      name: "develop_title",
      title: "Develop Title",
      type: "string",
    },
    {
      name: "develop_content",
      title: "Develop Content",
      type: "textEditor",
    },
  ],
});
