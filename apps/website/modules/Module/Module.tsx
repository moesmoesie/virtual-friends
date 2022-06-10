import HomeLandingModule from "../HomeLandingModule";
import HomeAboutModule from "../HomeAboutModule";

interface ModuleProps {
  type: "homeLandingModule" | "homeAboutModule";
  data: any;
}

const Module: React.FC<ModuleProps> = ({ type, data }) => {
  switch (type) {
    case "homeLandingModule":
      return <HomeLandingModule {...data} />;
    case "homeAboutModule":
      return <HomeAboutModule {...data} />;
    default:
      return <div>Module not Found!</div>;
  }
};

export default Module;
