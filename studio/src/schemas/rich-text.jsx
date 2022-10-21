import React from "react";

const gradientRender = (props) => (
  <span style={{ color: "#893AD8" }}>{props.children}</span>
);

export default {
  name: "richText",
  title: "RichText",
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
              icon: () => "G",
              render: gradientRender,
            },
          },
        ],
        annotations: [],
      },
    },
  ],
};
