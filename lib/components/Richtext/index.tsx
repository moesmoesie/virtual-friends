import { RichtextType } from "./types";
import { render } from "storyblok-rich-text-react-renderer";
const Richtext: React.FC<RichtextType> = ({ content }) => {
  return <div>{render(content)}</div>;
};

export default Richtext;
