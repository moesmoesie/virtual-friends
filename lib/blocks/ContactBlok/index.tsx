import { storyblokEditable } from "@storyblok/react";
import { Container, CompanyCard, GradientText } from "../../components";
import { useScreen } from "../../hooks";
import { Blok } from "../types";
import Form from "./Form";

const GeneralContactModule: React.FC<{ blok: Blok }> = ({ blok }) => {
  const screen = useScreen();
  return (
    <section {...storyblokEditable(blok)}>
      <Container module={blok}>
        <h2 className="display-2 mb-8">
          <GradientText>{blok?.title}</GradientText>
        </h2>
        <div className="flex gap-[60px] flex-col large:flex-row">
          <Form />
          <div className="large:-translate-y-16">
            <CompanyCard
              type={screen === "medium" ? "horizontal" : "verticle"}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GeneralContactModule;
