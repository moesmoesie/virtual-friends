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
        flag: "language.flag",
      },
      prepare(selection) {
        const { id, flag } = selection;
        const subtitle = id;
        return {
          title: subtitle,
          media: flag,
        };
      },
    },
  };
};
