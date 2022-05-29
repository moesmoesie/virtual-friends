export default ({ name, title, fields, icon = undefined, props = null }) => {
  return {
    name,
    title,
    type: "document",
    i18n: true,
    ...props,
    fields: [
      {
        title: "Module Title",
        name: "module_title",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      ...fields,
    ],
    preview: {
      select: {
        title: "module_title",
        lang: "_lang",
      },
      prepare({ title, lang }) {
        return {
          title,
          subtitle: lang,
        };
      },
    },
  };
};
