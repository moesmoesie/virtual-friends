import Page, { defaultGetStaticProps } from "../page";

export default Page;

export async function getStaticProps({ params, preview = false }) {
  return defaultGetStaticProps({
    params: { slug: "" },
    preview: preview,
    prefixSlug: "",
    type: "home",
  });
}
