import Head from "next/head";
import { GetStaticProps } from "next";
import { getClient } from "../sanity/sanity.server";
import { usePreviewSubscription } from "../sanity/sanity.helpers";
import { filterDataToSingleItem } from "../sanity/sanity.helpers";
import Module, { ModuleZod } from "../modules";
import { z } from "zod";
import { PageQuery, SlugQuery } from "../sanity/sanity.queries";

const PageZod = z.object({
  seo: z.object({
    title: z.string().nullable(),
    description: z.string().nullable(),
    keywords: z.array(z.string()).nullable(),
  }),
  modules: z.array(ModuleZod),
});

type PageType = z.infer<typeof PageZod>;

interface Props {
  page: PageType;
  preview: boolean;
  query: string;
  queryParams: any;
}

const Page: React.FC<Props> = (props) => {
  const { data: previewData } = usePreviewSubscription(props.query, {
    params: props.queryParams ?? {},
    initialData: props.page,
    enabled: props.preview,
  });

  const page: PageType = filterDataToSingleItem(previewData, props.preview);

  return (
    <div>
      <Head>
        <title>{page.seo.title ?? ""}</title>
        <meta name="description" content={page.seo.description ?? ""} />
        <meta name="keywords" content={page.seo?.keywords ? "" : ""} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {page.modules &&
          page.modules.map((module, index) => {
            return <Module key={index} {...module} />;
          })}
      </div>
    </div>
  );
};

export default Page;

export async function getStaticPaths() {
  const data = await getClient(false).fetch(SlugQuery);

  return {
    paths: data,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  let slug = "/";

  if (params?.slug && Array.isArray(params.slug)) {
    slug += params.slug.join("/");
  }

  const queryParams = { slug };
  const data = await getClient(preview).fetch(PageQuery, queryParams);

  if (!data) return { notFound: true };
  const page: Props = filterDataToSingleItem(data, preview);
  PageZod.parse(page);

  return {
    props: {
      page: page,
      query: preview ? PageQuery : null,
      queryParams: preview ? queryParams : null,
      preview: preview ?? false,
    },
  };
};
