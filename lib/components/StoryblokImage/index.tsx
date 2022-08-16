import { StoryblokImageProps } from "./types";

const StoryblokImage: React.FC<StoryblokImageProps> = ({
  filename,
  ...props
}) => {
  return <img {...props} src={filename} />;
};

export default StoryblokImage;
