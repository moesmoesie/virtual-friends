import { NextPage } from "next";
import { NextStudio } from "next-sanity/studio";
import { createConfig } from "sanity";
import config from "../../sanity/sanity.config";

const studioConfig = createConfig(config);

const Studio: NextPage = () => {
  return <NextStudio config={studioConfig} />;
};

export default Studio;
