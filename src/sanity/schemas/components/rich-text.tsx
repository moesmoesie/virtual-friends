import React from "react";
import { GradientText } from "../../../components/gradient-text/gradient-text";

export default {
  name: "rich-text",
  title: "Rich Text",
  type: "array",
  of: [
    {
      type: "block",
      styles: [{ title: "Normal", value: "normal" }],
      lists: [],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          {
            title: "Gradient",
            value: "gradient",
            blockEditor: {
              icon: () => <div className="w-4 h-4 bg-primary-400 rounded-full translate-y-[2px]" />,
              render: (props: any) => <GradientText>{props.children}</GradientText>,
            },
          },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "link",
            fields: [
              {
                name: "link",
                type: "link",
              },
            ],
          },
        ],
      },
    },
  ],
};
