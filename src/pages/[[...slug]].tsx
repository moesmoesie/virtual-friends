import { GetStaticProps } from "next";
import { getClient } from "../sanity/sanity.server";
import Module, { ModuleZod } from "../modules";
import { z } from "zod";
import { PageQuery, SlugQuery } from "../sanity/sanity.queries";
import { Seo, SeoZod } from "../components/seo/seo";
import usePreviewSubscription from "../sanity/helpers/usePreviewSubscription";
import filterDataToSingleItem from "../sanity/helpers/filterDataToSingleItem";

const PageZod = z.object({
  seo: SeoZod.nullable().optional(),
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
    <>
      <Seo {...page.seo} />
      <div>
        {page.modules &&
          page.modules.map((module, index) => {
            return <Module key={index} {...module} />;
          })}
      </div>
    </>
  );
};

export default Page;

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

  const queryParams = { slug };
  const data = await getClient(preview).fetch(PageQuery, queryParams);

  if (!data || (Array.isArray(data) && data.length === 0)) return { notFound: true };

  let page: PageType = filterDataToSingleItem(data, preview);
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
