const STORYBLOK_SERVICE = "//a.storyblok.com";

const getStoryblokImageSource = (
  src: string,
  width: number,
  height?: number
) => {
  let options = "/m/";

  if (!src.includes(STORYBLOK_SERVICE)) {
    return null;
  }

  if (!height) {
    options += `${width}x0/`;
  } else {
    options += `${width}x${height}/`;
  }

  src += options;

  return src;
};

export interface ImageType {
  filename: string;
  type?: "normal" | "storyblok";
  is_external_url?: boolean;
  lazy?: boolean;
  width: number;
  height?: number;
  className?: string;
  [propName: string]: any;
}

export const Image: React.FC<ImageType> = ({
  filename,
  is_external_url = false,
  lazy = true,
  type = "storyblok",
  ...props
}) => {
  let src =
    type === "storyblok"
      ? getStoryblokImageSource(filename, props.width, props?.height)
      : filename;

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
