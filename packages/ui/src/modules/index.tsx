import HomeAboutModule, {
  Props as HomeAboutModuleProps,
} from "./HomeAboutModule";
import HomeHowWeWorkModule, {
  Props as HomeHowWeWorkModuleProps,
} from "./HomeHowWeWorkModule";
import HomeLandingModule, {
  Props as HomeLandingModuleProps,
} from "./HomeLandingModule";
import HomeOfferModule, {
  Props as HomeOfferModuleProps,
} from "./HomeOfferModule";
import HomeUniqueSellingPointsModule, {
  Props as HomeUniqueSellingPointsModuleProps,
} from "./HomeUniqueSellingPointsModule";
import GeneralContactModule, {
  Props as GeneralContactModuleProps,
} from "./GeneralContactModule";

import React from "react";

export interface ModuleProps {
  module:
    | {
        name: "HomeUniqueSellingPointsModule";
        data: HomeUniqueSellingPointsModuleProps;
      }
    | {
        name: "HomeAboutModule";
        data: HomeAboutModuleProps;
      }
    | {
        name: "HomeHowWeWorkModuleModule";
        data: HomeHowWeWorkModuleProps;
      }
    | {
        name: "HomeLandingModule";
        data: HomeLandingModuleProps;
      }
    | {
        name: "HomeOfferModule";
        data: HomeOfferModuleProps;
      }
    | {
        name: "GeneralContactModule";
        data: HomeOfferModuleProps;
      };
}

export const Module: React.FC<ModuleProps> = ({ module }) => {
  switch (module.name) {
    case "HomeAboutModule":
      return <HomeAboutModule {...module.data} />;
    case "HomeHowWeWorkModuleModule":
      return <HomeHowWeWorkModule {...module.data} />;
    case "HomeLandingModule":
      return <HomeLandingModule {...module.data} />;
    case "HomeOfferModule":
      return <HomeOfferModule {...module.data} />;
    case "HomeUniqueSellingPointsModule":
      return <HomeUniqueSellingPointsModule {...module.data} />;
    case "GeneralContactModule":
      return <GeneralContactModule {...module.data} />;
  }
};
