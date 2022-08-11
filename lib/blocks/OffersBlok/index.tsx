import React from "react";
import { GradientText, RichText } from "../../components";
import { Container } from "../../components";
import { Blok } from "../types";
import { storyblokEditable } from "@storyblok/react";
const OffersBlock: React.FC<{ blok: Blok }> = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)}>
      <Container>
        <h2 className="display-1 mb-9">
          <GradientText>{blok?.title}</GradientText>
        </h2>
        <div className="flex flex-col gap-14 medium:gap-28">
          {blok?.products?.map((el: Blok) => {
            const keywords = el.keywords.split(",");
            return (
              <div {...storyblokEditable(el)} className="flex" key={el._uid}>
                <div className="max-w-xl grid gap-4 medium:gap-6">
                  <h3 className="display-3">{el.title}</h3>
                  <p className="body-3">{el.body}</p>
                  <ul className="flex  gap-3">
                    {keywords.map((keyword: string, index: number) => {
                      return (
                        <li key={index}>
                          <Chip value={keyword} />
                        </li>
                      );
                    })}
                  </ul>
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
      <span className="body-1 font-bold uppercase">{value}</span>
    </div>
  );
};

export default OffersBlock;
