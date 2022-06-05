import createModule from "../../utils/createModule";
import { AiOutlineHome } from "react-icons/ai";
import { GoMilestone } from "react-icons/go";

export default createModule({
  name: "homeHowWeWorkModule",
  title: "Home How We Work Module",
  subtitle: "Home",
  previewTitle: "How We Work Module",
  icon: AiOutlineHome,
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
    {
      name: "steps",
      title: "Steps",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "workStep" }],
        },
      ],
    },
  ],
});
