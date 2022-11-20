import { GetStaticProps } from "next";
import { getClient } from "../sanity/sanity.server";
import { PageQuery, SlugQuery } from "../sanity/sanity.queries";
import filterDataToSingleItem from "../sanity/helpers/filterDataToSingleItem";
import { PreviewSuspense } from "next-sanity/preview";
import { Page } from "../screens/page";
import { PageType } from "../screens/page/type";
import { lazy } from "react";

const PreviewPage = lazy(() => import("../screens/page/preview"));

interface Props {
  page: PageType;
  preview: boolean;
  query: string;
  queryParams: any;
}

const Dynamic: React.FC<Props> = (props) => {
  if (props.preview) {
    return (
      <PreviewSuspense fallback={<Page {...props.page} />}>
        <PreviewPage query={props.query} params={props.queryParams} />
      </PreviewSuspense>
    );
  }

  return <Page {...props.page} />;
};

export default Dynamic;

export async function getStaticPaths() {
  const data = await getClient(false).fetch(SlugQuery);

  return {
    paths: data,
    fallback: "blocking",
  };
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  let slug = "/";

  if (params?.slug && Array.isArray(params.slug)) {
    slug += params.slug.join("/");
  }

  const PageZod = (await import("../screens/page/type")).PageZod;

  const queryParams = { slug };
  const data = await getClient(preview).fetch(PageQuery, queryParams);

  if (!data || (Array.isArray(data) && data.length === 0)) return { notFound: true };

  let page = filterDataToSingleItem(data, preview);

  page = PageZod.parse(page);

  return {
    props: {
      page: page,
      query: preview ? PageQuery : null,
      queryParams: preview ? queryParams : null,
      preview: preview ?? false,
    },
  };
};
