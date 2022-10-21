import { filterDataToSingleItem } from "../sanity/sanity";
import { getClient } from "../sanity/sanity.server";
import Page from "../page";

export default Page;

export async function getStaticProps({ preview = false }) {
  const query = `*[_type == "home" && slug.current == "/"]`;
  const queryParams = { slug: "/" };
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
