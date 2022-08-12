import { storyblokEditable } from "@storyblok/react";
import { Button, Card, Container } from "../../components";
import { Blok } from "../types";

const HomeLandingBlok: React.FC<{ blok: Blok }> = ({ blok }) => {
  return (
    <section className="relative" {...storyblokEditable(blok)}>
      <Container module={blok}>
        <Background />
        <div className="flex items-center relative justify-between">
          <div className="max-w-2xl flex flex-col gap-10">
            <h1 className="display-1 ">{blok?.title}</h1>
            <p className="body-3 medium:max-w-[80%]">{blok.body}</p>
            <div>
              <Button>{blok.callToAction}</Button>
            </div>
          </div>

          <div className="w-full hidden large:flex justify-end">
            <Card className="w-[450px] h-[450px] rounded-full">
              <div />
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

const Background: React.FC = () => {
  return (
    <>
      <div className="absolute hidden medium:block rounded-3xl -left-16 bottom-0 origin-left opacity-50 -rotate-[30deg] large:-rotate-[20deg] w-[130%] large:w-[110%] blur-3xl h-[250px] large:h-[300px] bg-gradient-1" />
      <div className="absolute medium:hidden -left-16 bottom-0 origin-left opacity-50 -rotate-[45deg] large:-rotate-[20deg] w-[200%] large:w-[110%] blur-3xl h-[250px] large:h-[300px] bg-gradient-1" />
    </>
  );
};

export default HomeLandingBlok;
