import { StoryblokImageProps } from "./types";
import Image from "next/future/image";

const StoryblokImage: React.FC<StoryblokImageProps> = ({
  filename,
  is_external_url,
  lazy = true,
  ...props
}) => {
  let src = filename;
  const storyblokService = "//a.storyblok.com";
  let options = "/m/";

  if (!src.includes(storyblokService)) {
    return <img {...props} />;
  }

  if (props.fill) {
    options += `${props.width}x0/`;
  } else {
    options += `${props.width}x${props.height}/`;
  }

  src += options;

  return (
    <Image
      priority={!lazy}
      width={props.fill ? undefined : props?.width}
      height={props.fill ? undefined : props?.height}
      fill={props?.fill}
      style={props?.style}
      className={props?.className}
      src={src}
    />
  );
};

export default StoryblokImage;
