import { createModule } from "../helpers";

export default createModule({
  name: "solutions",
  title: "Solutions",
  fields: [
    {
      name: "title",
      type: "richText",
      title: "Title",
    },
    {
      name: "solutions",
      type: "array",
      title: "Solutions",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Icon",
              name: "icon",
              type: "image",
            },
            {
              title: "Title",
              name: "title",
              type: "string",
            },
            {
              title: "Body",
              name: "body",
              type: "richText",
            },
            {
              title: "Keywords",
              name: "keywords",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              title: "Solution Type",
              name: "solutionType",
              type: "string",
              options: {
                list: [
                  { title: "Ecommerce", value: "eccomerce" },
                  { title: "CMS", value: "cms" },
                  { title: "Website", value: "website" },
                  { title: "SAAS", value: "saas" },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
});
