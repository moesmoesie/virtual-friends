import getStoryblokImageSource from "utils/getStoryblokImageSource";

export interface ImageType {
  filename: string;
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
