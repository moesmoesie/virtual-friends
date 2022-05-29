import React from "react";
import * as pages from "../pages";
import { BsFolderSymlink } from "react-icons/bs";

export default {
  name: "internalLink",
  type: "object",
  title: "Internal link",
  blockEditor: {
    icon: () => <BsFolderSymlink />,
  },
  fields: [
    {
      name: "reference",
      type: "reference",
      title: "Reference",
      options: {
        disableNew: true,
      },
      to: [
        ...Object.values(pages).map((el) => {
          return { type: el.name };
        }),
      ],
    },
  ],
};
