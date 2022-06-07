import React from "react";

import HomeAboutModule from "./HomeAboutModule";
import HomeHowWeWorkModule from "./HomeHowWeWorkModule";
import HomeLandingModule from "./HomeLandingModule";
import HomeOfferModule from "./HomeOfferModule";
import HomeUniqueSellingPointsModule from "./HomeUniqueSellingPointsModule";

export interface ModuleProps {
  module: any;
}

export const Module: React.FC<ModuleProps> = ({ module }) => {
  console.log(module);
  switch (module?.type ?? "") {
    case "homeAboutModule":
      return <HomeAboutModule {...module.data} />;
    case "homeHowWeWorkModule":
      return <HomeHowWeWorkModule {...module.data} />;
    case "homeLandingModule":
      return <HomeLandingModule {...module.data} />;
    case "homeOffersModule":
      return <HomeOfferModule {...module.data} />;
    case "homeUniqueSellingPointsModule":
      return <HomeUniqueSellingPointsModule {...module.data} />;
    default:
      return <div>Module Not Found!</div>;
  }
};
