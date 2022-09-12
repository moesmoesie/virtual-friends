import getStoryblokImageSource from "../../utils/getStoryblokImageSource";
import { StoryblokImageProps } from "./types";

const StoryblokImage: React.FC<StoryblokImageProps> = ({
  filename,
  is_external_url,
  lazy = true,
  ...props
}) => {
  let src = getStoryblokImageSource(filename, props.width, props?.height);

  if (!src) {
    return <img className={props?.className} {...props} />;
  }

  return (
    <img
      width={props.width}
      height={props?.height}
      style={props?.style}
      className={props?.className}
      src={src}
    />
  );
};

export default StoryblokImage;
