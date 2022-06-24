import Head from "next/head";
import { renderStudio } from "sanity";
import createConfig from "../../sanity.config";
import { useEffect } from "react";

export default function Studio() {
  useEffect(() => {
    renderStudio(document.getElementById("app"), createConfig);
  });

  return (
    <>
      <Head>
        <title>Sanity Studio</title>
      </Head>

      <div className="h-screen min-h-full" id="app" />
    </>
  );
}
