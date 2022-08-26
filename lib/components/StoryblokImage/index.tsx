import { StoryblokImageProps } from "./types";

const StoryblokImage: React.FC<StoryblokImageProps> = ({
  filename,
  is_external_url,
  size,
  lazy = true,
  ...props
}) => {
  let src = filename;
  const storyblokService = "//a.storyblok.com";
  let options = "/m/";

  if (!src.includes(storyblokService)) {
    return <img {...props} />;
  }

  options += `${size}x0/`;

  src += options;

  return <img {...props} loading={lazy ? "lazy" : "eager"} src={src} />;
};

export default StoryblokImage;
