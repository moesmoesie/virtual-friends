import HomeLandingModule from "../HomeLandingModule";
import HomeAboutModule from "../HomeAboutModule";
import HomeHowWeWorkModule from "../HomeHowWeWorkModule";
import HomeOffersModule from "../HomeOffersModule";

interface ModuleProps {
  type:
    | "homeLandingModule"
    | "homeAboutModule"
    | "homeHowWeWorkModule"
    | "homeOffersModule";
  data: any;
}

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
    default:
      return <div>Module not Found!</div>;
  }
};

export default Module;
