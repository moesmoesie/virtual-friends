import React from "react";
import { Container } from "../../components";
import { RichText } from "../../components";
import Company from "./Company";
import Ecommerce from "./Ecommerce";
import ContentMangementSystem from "./ContentMangementSystem";
import ProgressiveWebApp from "./ProgressiveWebApp";
import { HomeOffersModuleProps } from "./types";
import { ModuleContainer } from "../../components";

const HomeOffersModule: React.FC<HomeOffersModuleProps> = ({
  title = "Default Title",
  offers = [],
}) => {
  return (
    <ModuleContainer title={title}>
      <div className="flex flex-col gap-14 large:gap-24">
        {offers.map((el, index) => {
          return (
            <Offer
              type={el.type}
              key={index}
              reverse={index % 2 == 0}
              keywords={el.keywords}
              title={el.title}
            >
              <RichText content={el.body} />
            </Offer>
          );
        })}
      </div>
    </ModuleContainer>
  );
};

interface OfferProps {
  title: string;
  children: string | JSX.Element;
  keywords: string[];
  reverse: boolean;
  type: string;
}

const Offer: React.FC<OfferProps> = ({
  title,
  children,
  keywords,
  reverse = false,
  type,
}) => {
  return (
    <div
      className={`large:flex ${
        reverse ? "large:flex-row-reverse" : ""
      } large: items-center large:gap-12`}
    >
      <div className="flex-[1]">
        {/* Title */}
        <h3 className="display-3 mb-4"> {title}</h3>

        {/* Body */}
        <div className="mb-5 max-w-3xl">{children}</div>

        {/* Keywords  */}
        <div className="flex flex-wrap gap-3">
          {keywords.map((el, index) => {
            return <Chip value={el} key={index} />;
          })}
        </div>
      </div>
      <div className="hidden large:block">
        {type === "cms" && <ContentMangementSystem />}
        {type === "pwa" && <ProgressiveWebApp />}
        {type === "ecommerce" && <Ecommerce />}
        {type === "company" && <Company />}
      </div>
    </div>
  );
};

interface ChipProps {
  value: string;
}

const Chip: React.FC<ChipProps> = ({ value }) => {
  return (
    <div className="rounded-lg bg-DarkPurple/300 px-2 py-1">
      <span className="body-1 font-bold uppercase">{value}</span>
    </div>
  );
};

export default HomeOffersModule;
