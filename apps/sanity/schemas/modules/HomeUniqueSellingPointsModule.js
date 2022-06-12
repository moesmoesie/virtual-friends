import createModule from "../../utils/createModule";
import { AiOutlineHome } from "react-icons/ai";

export default createModule({
  name: "homeUniqueSellingPointsModule",
  title: "Home Unique Selling Points Module",
  icon: AiOutlineHome,
  subtitle: "Home",
  previewTitle: "Unique Selling Points Module",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "uniqueSellingPoints",
      title: "Unique Selling Points",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "body",
              title: "Body",
              type: "text",
            },
          ],
        },
      ],
    },
  ],
});
