import { storyblokEditable } from "@storyblok/react";
import React from "react";
import { Container } from "../../components";
import { Blok } from "../types";

const HeaderBlok: React.FC<{ blok: Blok }> = ({ blok }) => {
  return (
    <header
      {...storyblokEditable(blok)}
      className=" w-full z-[100000] fixed bg-dark-purple-400 supports-backdrop-filter:backdrop-blur-lg supports-backdrop-filter:bg-dark-purple-400/70 "
    >
      <Container>
        <div className="py-4 z-50">
          <a className="body-3 font-bold uppercase text-teal-500" href="#">
            Virtual Friends
          </a>
        </div>
      </Container>
    </header>
  );
};

export default HeaderBlok;
