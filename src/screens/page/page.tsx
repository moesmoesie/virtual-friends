import { z } from "zod";
import { SeoZod, Seo } from "../../components/seo/seo";

// Import modules
import { AboutMe, AboutMeZod } from "../../modules/about-me/about-me";
import { Article, ArticleZod } from "../../modules/article/article";
import { Contact, ContactZod } from "../../modules/contact/contact";
import { Footer, FooterZod } from "../../modules/footer/footer";
import { Header, HeaderZod } from "../../modules/header/header";
import { LandingHome, LandingHomeZod } from "../../modules/landing-home/landing-home";
import { SellingPoints, SellingPointsZod } from "../../modules/selling-points/selling-points";
import { Solutions, SolutionsZod } from "../../modules/solutions/solutions";
import { Spacer, SpacerZod } from "../../modules/spacer/spacer";

export const ModuleZod = z.union([AboutMeZod, SolutionsZod, LandingHomeZod, HeaderZod, ContactZod, FooterZod, SellingPointsZod, SpacerZod, ArticleZod]);

export const PageZod = z.object({
  seo: SeoZod.optional(),
  modules: z.array(ModuleZod),
});

export type PageType = z.infer<typeof PageZod>;

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
