import createModule from "../../utils/createModule";
import { AiOutlineHome } from "react-icons/ai";

export default createModule({
  name: "homeLandingModule",
  title: "Home Landing Module",
  subtitle: "Home",
  previewTitle: "Landing Module",
  icon: AiOutlineHome,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "textEditor",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "textEditor",
    },
    {
      name: "button",
      title: "Call To Action",
      type: "reference",
      to: [{ type: "button" }],
    },
  ],
});
