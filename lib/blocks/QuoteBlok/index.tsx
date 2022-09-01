import { Blok } from "../types";
import { storyblokEditable } from "@storyblok/react";
import { Container, FadeIn, Richtext } from "../../components";
import {} from "storyblok-js-client";

const QuoteBlok: React.FC<{ blok: Blok }> = (props) => {
  return <HomeQuoteModuleLarge {...props} />;
};

const HomeQuoteModuleLarge: React.FC<{ blok: Blok }> = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)}>
      <Container module={{ ...blok }}>
        <div className="w-full relative grid place-items-center">
          <FadeIn>
            <h2 className="display-4 medium:display-2  text-center">
              <Richtext content={blok?.text} />
            </h2>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};

export default QuoteBlok;
