import { CgComponents } from "react-icons/cg";

const createModule = ({ name, title, icon = CgComponents, fields }) => {
  return {
    name,
    type: "object",
    title,
    icon,
    fields: [
      ...fields,
      {
        type: "object",
        name: "module",
        fields: [
          {
            name: "scrollMargin",
            type: "string",
            title: "Scroll Margin",
          },
          {
            name: "background",
            type: "string",
            title: "Background",
          },
          {
            name: "paddingTop",
            type: "string",
            title: "Padding Top",
          },
          {
            name: "paddingBottom",
            type: "string",
            title: "Padding Bottom",
          },
          {
            title: "Hide module for these screen sizes",
            name: "hide",
            type: "object",
            options: {
              columns: 3,
            },
            fields: [
              {
                title: "Small",
                name: "small",
                type: "boolean",
              },
              {
                title: "Medium",
                name: "medium",
                type: "boolean",
              },
              {
                title: "Large",
                name: "large",
                type: "boolean",
              },
            ],
          },
        ],
      },
    ],
    preview: {
      select: {
        module: "module",
      },
      prepare(selection) {
        const { module } = selection;
        let subtitle = [];

        if (!module?.small) subtitle.push("small");
        if (!module?.medium) subtitle.push("medium");
        if (!module?.large) subtitle.push("large");

        return {
          title,
          subtitle: subtitle.join(" | "),
        };
      },
    },
  };
};

export default createModule;
