import { z } from "zod";
import { SeoZod } from "../../components/seo/seo";
import { fallback } from "../../helpers/zod";
import { AboutMeZod } from "../../modules/about-me/type";
import { ArticleZod } from "../../modules/article/type";
import { ContactZod } from "../../modules/contact/type";
import { FooterZod } from "../../modules/footer/type";
import { HeaderZod } from "../../modules/header/type";
import { LandingHomeZod } from "../../modules/landing-home/type";
import { SellingPointsZod } from "../../modules/selling-points/type";
import { SolutionsZod } from "../../modules/solutions/type";
import { SpacerZod } from "../../modules/spacer/type";

export const ModuleZod = z.union([AboutMeZod, SolutionsZod, LandingHomeZod, HeaderZod, ContactZod, FooterZod, SellingPointsZod, SpacerZod, ArticleZod]);

export const PageZod = z.object({
  seo: SeoZod.or(fallback(null)),
  modules: z.array(ModuleZod),
});

export type PageType = z.infer<typeof PageZod>;
