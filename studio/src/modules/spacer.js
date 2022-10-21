import { createModule } from "../helpers";

export default createModule({
  name: "spacer",
  title: "Spacer",
  fields: [
    {
      name: "size",
      type: "object",
      options: {
        columns: 3,
      },
      title: "Spacer height",
      fields: [
        {
          name: "small",
          type: "string",
          title: "Small screens",
        },
        {
          name: "medium",
          type: "string",
          title: "Medium screens",
        },
        {
          name: "large",
          type: "string",
          title: "Large screens",
        },
      ],
    },
  ],
});
