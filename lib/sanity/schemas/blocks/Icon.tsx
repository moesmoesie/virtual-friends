import { defineType } from "sanity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default defineType({
  name: "icon",
  type: "object",
  title: "Icon",
  icon: <FontAwesomeIcon icon={"icons"} />,
  fields: [
    {
      title: "Icon Name",
      name: "iconName",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      title: "Prefix",
      name: "prefix",
      type: "string",
      validation: (rule) => rule.required(),
    },
  ],
});
