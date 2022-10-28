import { groq } from "next-sanity";
import Head from "next/head";
import Module from "../module";
import { filterDataToSingleItem } from "../sanity/sanity";
import { formatSlugData } from "../sanity/sanity";
import { usePreviewSubscription } from "../sanity/sanity";
import { getClient } from "../sanity/sanity.server";

export default function Page({ data, preview }) {
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    initialData: data?.page,
    enabled: preview,
  });

  const page = filterDataToSingleItem(previewData, preview);

  return (
    <>
      <Head>
        <title>Mustafa Darwesh</title>
        <meta name="description" content="Freelance Web Developer" />
        <meta
          property="og: title"
          content="I'm a web developer, here to bring your pixel-perfect designs to life."
        />

        <meta property="og: image" content="/images/logo.png" />

        <meta
          property="og: image"
          content="I'm a web developer, here to bring your pixel-perfect designs to life."
        />

        <meta property="og: type" content="website" />
      </Head>
      <div>
        {page?.modules?.map((module, index) => {
          return <Module key={index} {...module} />;
        })}
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const query = `*[defined(slug.current)]{
    'params': {
      'slug': slug.current
    }
  }`;

  let data = await getClient(false).fetch(query);
  data = formatSlugData(data);

  return {
    paths: data,
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const slug = `/${params?.slug?.join("/") ?? ""}`;
  const queryParams = { slug };
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
    *[slug.current == $slug]{
        _id,
        modules[]{
            _type,
            ...select(
                _type == "landing-home" => {
                    ...,
                    "image" : image.asset->,
                    "imageBackground": imageBackground.asset->
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
