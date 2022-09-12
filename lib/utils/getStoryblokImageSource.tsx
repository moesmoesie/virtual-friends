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

export default getStoryblokImageSource;
