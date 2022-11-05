// IMPORT MODULES
import AboutMeSchema from "./schemas/modules/about-me.schema";
import ArticleSchema from "./schemas/modules/article.schema";
import ContactSchema from "./schemas/modules/contact.schema";
import FooterSchema from "./schemas/modules/footer.schema";
import HeaderSchema from "./schemas/modules/header.schema";
import LandingHomeSchema from "./schemas/modules/landing-home.schema";
import SellingPointsSchema from "./schemas/modules/selling-points.schema";
import SpacerSchema from "./schemas/modules/spacer.schema";
import SolutionsSchema from "./schemas/modules/solutions.schema";

// IMPORT COMPONENTS
import PageSchema from "./schemas/components/page";
import RichTextSchema from "./schemas/components/rich-text";
import LinkSchema from "./schemas/components/link";
import ModuleSchema from "./schemas/components/module";

// END SCHEMA IMPORTS
import { deskTool } from "sanity/desk";
import { Config, isDev } from "sanity";
import { visionTool } from "@sanity/vision";

const allSchemas = [SolutionsSchema, AboutMeSchema, ArticleSchema, ContactSchema, FooterSchema, HeaderSchema, LandingHomeSchema, SellingPointsSchema, SpacerSchema, PageSchema, RichTextSchema, LinkSchema, ModuleSchema];
const devOnlyPlugins = [visionTool()];

import BaseConfig from "./sanity.base-config";
import productionUrl from "./structure/production-url";

const Config: Config = {
  ...BaseConfig,
  plugins: [deskTool(), ...(isDev ? devOnlyPlugins : [])],
  basePath: "/studio",

  schema: {
    types: allSchemas,
  },

  document: {
    productionUrl,
  },
};

export default Config;
