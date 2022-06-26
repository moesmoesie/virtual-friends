import HomeLandingModule from "../HomeLandingModule";
import HomeAboutModule from "../HomeAboutModule";
import HomeHowWeWorkModule from "../HomeHowWeWorkModule";
import HomeOffersModule from "../HomeOffersModule";
import HomeUniqueSellingPointsModule from "../HomeUniqueSellingPointsModule";
import GeneralContactModule from "../GeneralContactModule";
import { ModuleProps } from "./types";

const Module: React.FC<ModuleProps> = ({ type, data }) => {
  switch (type) {
    case "homeLandingModule":
      return <HomeLandingModule {...data} />;
    case "homeAboutModule":
      return <HomeAboutModule {...data} />;
    case "homeHowWeWorkModule":
      return <HomeHowWeWorkModule {...data} />;
    case "homeOffersModule":
      return <HomeOffersModule {...data} />;
    case "homeUniqueSellingPointsModule":
      return <HomeUniqueSellingPointsModule {...data} />;
    case "contactModule":
      return <GeneralContactModule {...data} />;
    default:
      return <div>Module not Found!</div>;
  }
};

export default Module;
