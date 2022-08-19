import { StoryblokImageProps } from "./types";

const StoryblokImage: React.FC<StoryblokImageProps> = ({
  filename,
  is_external_url,
  ...props
}) => {
  return <img {...props} src={filename} />;
};

export default StoryblokImage;
