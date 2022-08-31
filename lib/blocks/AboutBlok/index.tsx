import { Blok } from "../types";
import { storyblokEditable } from "@storyblok/react";
import { Container, FadeIn } from "../../components";

const AboutBlok: React.FC<{ blok: Blok }> = (props) => {
  return <HomeAboutModuleLarge {...props} />;
};

const HomeAboutModuleLarge: React.FC<{ blok: Blok }> = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)}>
      <Container module={{ ...blok }}>
        <div className="w-full relative grid place-items-center">
          <FadeIn>
            <h2 className="display-3">Your idea -{">"} We develop</h2>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};

export default AboutBlok;
