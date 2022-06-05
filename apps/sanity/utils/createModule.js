export default ({
  name,
  title,
  subtitle = "",
  previewTitle,
  fields,
  icon = null,
  props = null,
}) => {
  return {
    name,
    title,
    type: "object",
    preview: {
      prepare() {
        return {
          title: previewTitle ?? title,
          subtitle,
          media: icon,
        };
      },
    },
    ...props,
    fields,
  };
};
