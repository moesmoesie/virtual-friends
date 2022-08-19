import { storyblokEditable } from "@storyblok/react";
import { Blok } from "../types";

const SpacerBlok: React.FC<{ blok: Blok }> = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      style={{
        height: `${blok?.height}px`,
        backgroundColor:
          blok?.backgroundColor === "" ? undefined : blok?.backgroundColor,
      }}
    />
  );
};

export default SpacerBlok;
