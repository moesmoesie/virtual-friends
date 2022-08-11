import { storyblokEditable } from "@storyblok/react";
import { Blok } from "../types";

const SpacerBlok: React.FC<{ blok: Blok }> = ({ blok }) => {
  return (
    <div
      {...storyblokEditable}
      style={{
        height: `${blok?.height}px`,
        backgroundColor: blok?.backgroundColor,
      }}
    />
  );
};

export default SpacerBlok;
