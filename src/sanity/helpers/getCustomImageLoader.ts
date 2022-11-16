import { ImageLoaderProps } from "next/image";

type getCustomImageLoaderType = (props: ImageLoaderProps) => string;

const getCustomImageLoader: getCustomImageLoaderType = ({ src, width, quality }) => {
  const url = new URL(src);
  url.searchParams.append("auto", "format");
  url.searchParams.append("w", `${width}`);
  url.searchParams.append("q", `${quality || 75}`);
  return url.toString();
};

export default getCustomImageLoader;
