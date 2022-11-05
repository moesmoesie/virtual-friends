import { defineField, defineType } from "sanity";
import { createModulePreview } from "../../sanity.helpers";
import { MdSpaceBar } from "react-icons/md";

const SpacerIcon: React.FC = () => {
  return <MdSpaceBar style={{ transform: "rotate(90deg)" }} />;
};

export default defineType({
  title: "Spacer",
  name: "spacer",
  type: "document",
  icon: SpacerIcon,
  preview: createModulePreview("Spacer", SpacerIcon),
  fields: [
    defineField({
      name: "module",
      title: "Module Settings",
      type: "module",
    }),
  ],
});