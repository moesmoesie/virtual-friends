import React from "react";

export interface ImageType {
  src: string;
  lazy?: boolean;
  width: string;
  height?: string;
  className?: string;
  _type?: string;
  [propName: string]: any;
}

export const Image: React.FC<ImageType> = ({ lazy = true, ...props }) => {
  let src = props?.src;

  if (props._type === "sanity.imageAsset") {
    const url = new URL(props?.url);
    url.searchParams.append("auto", "format");
    if (props.width) url.searchParams.append("w", props.width);
    if (props.height) url.searchParams.append("h", props.height);
    src = url.toString();
  }

  return (
    <img
      width={props.width}
      height={props?.height}
      className={props?.className}
      src={src}
    />
  );
};
