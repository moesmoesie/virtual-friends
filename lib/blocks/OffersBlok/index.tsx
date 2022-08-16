import React from "react";
import { GradientText, RichText } from "../../components";
import { Container } from "../../components";
import { Blok } from "../types";
import { storyblokEditable } from "@storyblok/react";
import Ecommerce from "./Ecommerce";
import Company from "./Company";
import ContentMangementSystem from "./ContentMangementSystem";
import ProgressiveWebApp from "./ProgressiveWebApp";
import { Chip } from "../../components";
import { ProductSectionProps } from "./types";

const OffersBlock: React.FC<{ blok: Blok }> = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)}>
      <Container module={blok}>
        <h2 className="display-1 mb-9 large:mb-48">
          <GradientText>{blok?.title}</GradientText>
        </h2>

        <div className="flex flex-col gap-14 medium:gap-28 large:gap-96">
          {blok?.products?.map((el: Blok, index: number) => {
            const keywords = el.keywords.split(",");
            return (
              <ProductSection
                reverse={index % 2 === 0}
                key={el._uid}
                body={el?.body}
                title={el?.title}
                keywords={keywords}
                image={el?.image}
                components={<ProductComponent name={el?.type} />}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

const ProductComponent: React.FC<{ name: string }> = ({ name }) => {
  if (name === "ecommerce") return <Ecommerce />;
  if (name === "cms") return <ContentMangementSystem />;
  if (name === "pwa") return <ProgressiveWebApp />;
  if (name === "company") return <Company />;
  return <Ecommerce />;
};

const ProductSection: React.FC<ProductSectionProps> = (props) => {
  return (
    <div
      className={`w-full flex ${
        props.reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="max-w-xl grid gap-4 medium:gap-6 w-full">
        <h3 className="display-3">{props.title}</h3>
        <p className="body-3">{props.body}</p>
        <ul className="flex flex-wrap  gap-3">
          {props.keywords.map((keyword: string, index: number) => {
            return (
              <li key={index}>
                <Chip value={keyword} />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex-1 relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className={`${
              props.reverse ? "-translate-x-12" : "translate-x-12"
            }`}
          >
            {props.components}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersBlock;
