import {
  usePreviewSubscription,
  filterDataToSingleItem,
  formatSlugData,
} from "./sanity/sanity";
import { groq } from "next-sanity";
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
  const slug = `${prefixSlug}/${params?.slug}`;
  const queryParams = { slug, page: type };
  const data = await getClient(preview).fetch(PageQuery, queryParams);

  if (!data) return { notFound: true };

  const page = filterDataToSingleItem(data, preview);

  return {
    props: {
      preview,
      data: {
        page,
        query: preview ? PageQuery : null,
        queryParams: preview ? queryParams : null,
      },
    },
  };
}

const PageQuery = groq`
    *[_type == $page && slug.current == $slug]{
        _id,
        modules[]{
            _type,
            ...select(
                _type == "landing-home" => {
                    ...,
                    "image" : image.asset->
                },
                _type == "contact" => {
                    ...,
                    "image" : image.asset->
                },
                _type == "sellingPoints" => {
                    ...,
                    sellingPoints[]{
                      ...,
                      "icon": icon.asset->
                    }
                  },
                  _type == "header" => {
                      ...,
                      "logo": logo.asset->
                  },
                  _type == "solutions" => {
                      ...,
                      solutions[]{
                        ...,
                        "icon": icon.asset->
                      }
                  },
                {...}
            ) 
        }
    }
`;
