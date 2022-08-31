import { storyblokEditable } from "@storyblok/react";
import React from "react";
import { Container } from "../../components";
import { Blok } from "../types";

const FooterBlok: React.FC<{ blok: Blok }> = ({ blok }) => {
  return (
    <footer
      {...storyblokEditable(blok)}
      className="bg-white border-t border-t-grey-100"
    >
      <Container>
        <div className="flex justify-between py-6">
          <span className="body-2">Virtual Friends © 2022 </span>
          <a className="body-2" href="#">
            Privacy Policy
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default FooterBlok;
