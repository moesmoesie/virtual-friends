import { storyblokEditable } from "@storyblok/react";
import React from "react";
import { Container, GradientText } from "../../components";
import { Blok } from "../types";

const HeaderBlok: React.FC<{ blok: Blok }> = ({ blok }) => {
  return (
    <header
      {...storyblokEditable(blok)}
      className=" w-full z-[100000] border-b border-b-grey-100 fixed bg-white supports-backdrop-filter:backdrop-blur-lg supports-backdrop-filter:bg-white/70 "
    >
      <Container>
        <div className="py-4 z-50 flex">
          <a className="body-3 font-bold uppercase" href="#">
            <GradientText>Virtual Friends</GradientText>
          </a>
          <div className="hidden medium:flex gap-8 justify-end flex-1">
            {blok?.links.map((link: any) => {
              return (
                <a className="body-2 font-bold" href={link?.href}>
                  {link?.name}
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default HeaderBlok;
