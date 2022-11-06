import { NextPage } from "next";
import { NextStudio } from "next-sanity/studio";
import Head from "next/head";
import { defineConfig } from "sanity";
import config from "../../sanity/sanity.config";

const studioConfig = defineConfig(config);

const Studio: NextPage = () => {
  return (
    <>
      <NextStudio config={studioConfig} />
    </>
  );
};

export default Studio;
