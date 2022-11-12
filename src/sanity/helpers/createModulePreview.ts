import { CgComponents } from "react-icons/cg";

type createModulePreviewType = (title: string, icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>) => any;

const createModulePreview: createModulePreviewType = (title, icon = CgComponents) => {
  return {
    select: {
      module: "module",
    },
    prepare(selection: { module: any }) {
      const { module } = selection;
      let subtitle = [];

      if (!module?.small) subtitle.push("small");
      if (!module?.medium) subtitle.push("medium");
      if (!module?.large) subtitle.push("large");

      return {
        title,
        subtitle: subtitle.join(" | "),
        media: icon,
      };
    },
  };
};

export default createModulePreview;
