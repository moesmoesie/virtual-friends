import { defineType } from "sanity";
import { moduleFields } from "../../snippets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default defineType({
  type: "object",
  name: "homeUniqueSellingPointsModule",
  title: "Home Unique Selling Points Module",
  fields: moduleFields.concat([
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
          preview: {
            select: {
              icon: "icon",
              title: "title",
            },
            prepare: (value) => {
              const { icon, title } = value as any;
              return {
                title: title,
                media: <FontAwesomeIcon icon={icon?.iconName} />,
              };
            },
          },
          fields: [
            {
              name: "icon",
              title: "Icon",
              type: "icon",
            },
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
  ]),
});
