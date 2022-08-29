import { IconProps } from "./types";
import DOMPurify from "dompurify";

const Icon: React.FC<IconProps> = (props) => {
  if (props.type === "component") {
    return props.icon;
  }

  const icon = DOMPurify.sanitize(props.icon, {
    FORBID_ATTR: ["height", "width", "class"],
  });

  return (
    <div
      dangerouslySetInnerHTML={{ __html: icon }}
      className={` ${props.className}`}
    />
  );
};

export default Icon;
