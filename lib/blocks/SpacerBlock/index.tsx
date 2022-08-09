import { SpacerBlockProps } from "./types";
import { Container } from "../../components";

const SpacerBlock: React.FC<SpacerBlockProps> = (props) => {
  return (
    <div style={{
      height: `${props.height}px`,
      backgroundColor: props.backgroundColor
    }} />
  );
};

export default SpacerBlock;
