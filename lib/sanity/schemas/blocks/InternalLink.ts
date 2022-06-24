import * as pages from "../pages";

export default {
  name: "internalLink",
  type: "object",
  title: "Internal link",
  blockEditor: {
    icon: () => "Link",
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
