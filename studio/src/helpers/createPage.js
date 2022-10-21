import { CgComponents } from "react-icons/cg";
import { modules } from "../modules";

const createPage = ({ name, title, icon = CgComponents, fields = [] }) => {
  return {
    name,
    type: "document",
    title,
    icon,
    fields: [
      {
        title: "Title",
        name: "title",
        type: "string",
      },
      {
        title: "Slug",
        name: "slug",
        type: "slug",
        validation: (Rule) =>
          Rule.custom((slug) => {
            const value = slug?.current ?? "";
            if (value.startsWith("/")) return true;
            return "Slug needs to start with '/'";
          }),
      },
      {
        name: "ab",
        type: "string",
        title: "A/B Feature Flag",
      },
      {
        title: "Modules",
        name: "modules",
        type: "array",
        of: modules,
      },
      ...fields,
    ],
    preview: {
      select: {
        slug: "slug.current",
        ab: "ab",
      },
      prepare(selection) {
        const { slug, ab } = selection;
        return {
          title: slug,
          subtitle: ab,
        };
      },
    },
  };
};

export default createPage;
