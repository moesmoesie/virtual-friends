import React from "react";
import { GradientText, RichText } from "../../components";
import { Container } from "../../components";
import { Blok } from "../types";
import { storyblokEditable } from "@storyblok/react";
import Ecommerce from "./Ecommerce";
import Company from "./Company";
import ContentMangementSystem from "./ContentMangementSystem";

const OffersBlock: React.FC<{ blok: Blok }> = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)}>
      <Container module={blok}>
        <h2 className="display-1 mb-9 large:mb-48">
          <GradientText>{blok?.title}</GradientText>
        </h2>
        <div className="flex flex-col gap-14 medium:gap-28 large:gap-96">
          {blok?.products?.map((el: Blok) => {
            const keywords = el.keywords.split(",");
            return (
              <div
                {...storyblokEditable(el)}
                className="flex justify-between"
                key={el._uid}
              >
                <div className="max-w-xl grid gap-4 medium:gap-6">
                  <h3 className="display-3">{el.title}</h3>
                  <p className="body-3">{el.body}</p>
                  <ul className="flex flex-wrap  gap-3">
                    {keywords.map((keyword: string, index: number) => {
                      return (
                        <li key={index}>
                          <Chip value={keyword} />
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="flex-1 relative hidden large:block">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    {el?.type === "ecommerce" && (
                      <div className="translate-x-16">
                        <Ecommerce />
                      </div>
                    )}

                    {el?.type === "company" && (
                      <div className="translate-x-16">
                        <Company />
                      </div>
                    )}

                    {el?.type === "cms" && (
                      <div className="translate-x-16">
                        <ContentMangementSystem />
                      </div>
                    )}

                    {el?.type === "pwa" && <div>pwa</div>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

interface ChipProps {
  value: string;
}

const Chip: React.FC<ChipProps> = ({ value }) => {
  return (
    <div className="rounded-lg bg-dark-purple-300 px-2 py-1">
      <span className="body-1 whitespace-nowrap font-bold uppercase">
        {value}
      </span>
    </div>
  );
};

export default OffersBlock;
