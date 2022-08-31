import { storyblokEditable } from "@storyblok/react";
import { Button, Container, StoryblokImage } from "../../components";
import FloatingContainer from "../../components/FloatingContainer";
import { Blok } from "../types";

const HomeLandingBlok: React.FC<{ blok: Blok }> = ({ blok }) => {
  return (
    <section className="relative" {...storyblokEditable(blok)}>
      <Container module={blok}>
        <Background images={blok?.landingImages ?? []} />
        <div className="flex items-center relative justify-between">
          <div className="max-w-2xl flex flex-col gap-10">
            <h1 className="display-1 ">{blok?.title}</h1>
            <p className="body-3 medium:max-w-[80%]">{blok.body}</p>
            <div className="flex items-center">
              <a href="#contact">
                <div className="pointer-events-none">
                  <Button>{blok.callToAction}</Button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const Background: React.FC<{ images: any }> = (props) => {
  return (
    <>
      <div className="w-[500px]  h-[500px] -translate-y-12 right-0 absolute">
        {props.images.map((image: any, index: number) => {
          const p = Object.assign({}, image);
          Object.keys(p).forEach((key) => {
            if (
              p[key] === undefined ||
              !["top", "bottom", "right", "left", "translate"].includes(key)
            ) {
              delete p[key];
            }
          });
          return (
            <FloatingContainer delay={index * 0.2} key={index}>
              <StoryblokImage
                lazy={false}
                size={800}
                style={{
                  ...p,
                }}
                className="absolute w-[200px] opacity-40 large:opacity-100 blur-xl  large:blur-0 medium:w-[300px]"
                {...image.Image}
              />
            </FloatingContainer>
          );
        })}
      </div>
    </>
  );
};

export default HomeLandingBlok;
