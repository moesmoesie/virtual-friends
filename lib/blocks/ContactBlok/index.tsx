import { storyblokEditable } from "@storyblok/react";
import { Container, CompanyCard, GradientText } from "../../components";
import { useScreen } from "../../hooks";
import { Blok } from "../types";

const GeneralContactModule: React.FC<{ blok: Blok }> = ({ blok }) => {
  const screen = useScreen();
  return (
    <section {...storyblokEditable(blok)}>
      <Container module={blok}>
        <h2 className="display-1 mb-10">
          <GradientText>{blok?.title}</GradientText>
        </h2>
        <CompanyCard type={screen === "medium" ? "horizontal" : "verticle"} />
      </Container>
    </section>
  );
};

export default GeneralContactModule;
