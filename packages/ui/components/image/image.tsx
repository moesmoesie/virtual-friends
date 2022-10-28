import React from "react";

export interface ImageType {
  src?: string;
  lazy?: boolean;
  width: string;
  height?: string;
  className?: string;
  alt?: string;
  _type?: string;
  withPlaceholder?: boolean;
  metadata?: {
    lqip?: string;
  };
  [propName: string]: any;
}

export const Image: React.FC<ImageType> = ({
  lazy = true,
  alt = "",
  ...props
}) => {
  let src = props?.src;

  const lqip = props?.metadata?.lqip;

  if (props._type === "sanity.imageAsset") {
    const url = new URL(props?.url);
    url.searchParams.append("auto", "format");
    if (props.width) url.searchParams.append("w", props.width);
    if (props.height) url.searchParams.append("h", props.height);
    src = url.toString();
  }

  return (
    <>
      {lqip && props?.withPlaceholder && (
        <img
          width={props.width}
          height={props?.height}
          className={props?.className}
          src={lqip}
          alt={alt}
        />
      )}

      <img
        width={props.width}
        height={props?.height}
        className={props?.className}
        src={src}
        alt={alt}
      />
    </>
  );
};
