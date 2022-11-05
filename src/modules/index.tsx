import { AboutMe, AboutMeZod } from "./about-me/about-me";
import { Contact, ContactZod } from "./contact/contact";
import { Footer, FooterZod } from "./footer/footer";
import { Header, HeaderZod } from "./header/header";
import { LandingHome, LandingHomeZod } from "./landing-home/landing-home";
import { SellingPoints, SellingPointsZod } from "./selling-points/selling-points";
import { Spacer, SpacerZod } from "./spacer/spacer";
import { z } from "zod";
import { Solutions, SolutionsZod } from "./solutions/solutions";

const Module: React.FC<ModuleType> = (props) => {
  switch (props?._type) {
    case "about-me":
      return <AboutMe {...props} />;
    case "header":
      return <Header {...props} />;
    case "footer":
      return <Footer {...props} />;
    case "sellingPoints":
      return <SellingPoints {...props} />;
    case "landing-home":
      return <LandingHome {...props} />;
    case "spacer":
      return <Spacer {...props} />;
    case "contact":
      return <Contact {...props} />;
    case "solutions":
      return <Solutions {...props} />;
    default:
      return <div />;
  }
};

export default Module;

export const ModuleZod = z.discriminatedUnion("_type", [AboutMeZod, HeaderZod, FooterZod, SellingPointsZod, LandingHomeZod, SpacerZod, ContactZod, SolutionsZod]);

export type ModuleType = z.infer<typeof ModuleZod>;
