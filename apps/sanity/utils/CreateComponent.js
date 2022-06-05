import { BiAtom } from "react-icons/bi";

export default ({ name, title, fields, props = null }) => {
  return {
    name,
    title,
    type: "document",
    ...props,
    fields: [
      {
        title: "ID",
        name: "id",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      ...fields,
    ],
    preview: {
      select: {
        id: "id",
      },
      prepare(selection) {
        const { id } = selection;
        return {
          title: id,
          subtitle: title,
          media: BiAtom,
        };
      },
    },
  };
};
