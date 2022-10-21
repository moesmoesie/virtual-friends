import {
  usePreviewSubscription,
  filterDataToSingleItem,
  formatSlugData,
} from "./sanity/sanity";

import Module from "./module";
import { getClient } from "./sanity/sanity.server";

export default function Page({ data, preview }) {
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    initialData: data?.page,
    enabled: preview,
  });

  const page = filterDataToSingleItem(previewData, preview);

  return (
    <div>
      {page?.modules?.map((module) => {
        return <Module key={module?._key} {...module} />;
      })}
    </div>
  );
}

export async function defaultGetStaticPaths(type: string, slugPrefix: string) {
  const params = {
    type,
    slugPrefix,
  };

  const query = `*[_type == $type && string::startsWith(slug.current, $slugPrefix)]{
      'params': {
        'slug': slug.current
      }
    }`;

  let data = await getClient(false).fetch(query, params);
  data = formatSlugData(data, slugPrefix + "/");

  return {
    paths: data,
    fallback: true,
  };
}

export async function defaultGetStaticProps({
  params,
  preview = false,
  type,
  prefixSlug,
}) {
  let query = `*[_type == $type && slug.current == $slug]`;

  if (type === "home") {
    query = `*[_type == $type && slug.current == $slug && slug.current != "/"]`;
  }

  const slug = `${prefixSlug}/${params?.slug}`;
  const queryParams = { slug, type };
  const data = await getClient(preview).fetch(query, queryParams);

  if (!data) return { notFound: true };

  const page = filterDataToSingleItem(data, preview);

  return {
    props: {
      preview,
      data: {
        page,
        query: preview ? query : null,
        queryParams: preview ? queryParams : null,
      },
    },
  };
}
