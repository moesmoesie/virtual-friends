import createModule from "../../utils/createModule";
import { AiOutlineHome } from "react-icons/ai";
import { RiProductHuntLine } from "react-icons/ri";

export default createModule({
  name: "homeOffersModule",
  title: "Home Offers Module",
  icon: AiOutlineHome,
  subtitle: "Home",
  previewTitle: "Offers Module",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "offers",
      title: "Offers",
      type: "array",
      of: [
        {
          type: "object",
          title: "Offer",
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
              title: "Keywords",
              name: "keywords",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
          preview: {
            select: {
              title: "title",
            },
            prepare({ title }) {
              return {
                title: title,
                media: RiProductHuntLine,
              };
            },
          },
        },
      ],
    },
  ],
});
