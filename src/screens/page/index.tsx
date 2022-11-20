import { z } from "zod";
import { SeoZod, Seo } from "../../components/seo/seo";

// Import modules
import AboutMe from "../../modules/about-me";
import { Article } from "../../modules/article";
import { Contact } from "../../modules/contact";
import { Footer } from "../../modules/footer";
import { Header } from "../../modules/header";
import { LandingHome } from "../../modules/landing-home";
import { SellingPoints } from "../../modules/selling-points";
import { Solutions } from "../../modules/solutions";
import { Spacer } from "../../modules/spacer";
import { PageType } from "./type";

export const Page: React.FC<PageType> = (props) => {
  return (
    <>
      {props.seo && <Seo {...props.seo} />}
      {props?.modules &&
        props?.modules.map((module, index) => {
          switch (module._type) {
            case "about-me":
              return <AboutMe key={index} {...module} />;
            case "header":
              return <Header key={index} {...module} />;
            case "contact":
              return <Contact key={index} {...module} />;
            case "footer":
              return <Footer key={index} {...module} />;
            case "sellingPoints":
              return <SellingPoints key={index} {...module} />;
            case "spacer":
              return <Spacer key={index} {...module} />;
            case "landing-home":
              return <LandingHome key={index} {...module} />;
            case "article":
              return <Article key={index} {...module} />;
            case "solutions":
              return <Solutions key={index} {...module} />;
          }
        })}
    </>
  );
};
