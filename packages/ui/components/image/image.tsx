import React from "react";

export interface ImageType {
  src: string;
  is_external_url?: boolean;
  lazy?: boolean;
  width: number;
  height?: number;
  className?: string;
}

export const Image: React.FC<ImageType> = ({ lazy = true, ...props }) => {
  return (
    <img
      width={props.width}
      height={props?.height}
      className={props?.className}
      src={props.src}
    />
  );
};
