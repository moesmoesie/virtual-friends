"use client";

import { usePreview } from "../../sanity/lib/client";
import { PageSchema } from "./query";

const Preview: React.FC<{
  query: string;
  params: any;
  Component: React.ComponentType<any>;
  token: string;
}> = ({ query, Component, params, token }) => {
  const data = usePreview(token, query, params);

  if (!data) {
    return <div>Not Found!</div>;
  }

  const parsedData = PageSchema.parse(data);
  return <Component {...parsedData} />;
};

export default Preview;
