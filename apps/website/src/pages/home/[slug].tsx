import Page, { defaultGetStaticPaths, defaultGetStaticProps } from "../../page";
export default Page;

export const getStaticPaths = () => defaultGetStaticPaths("home", "/home");

export async function getStaticProps({ params, preview = false }) {
  return defaultGetStaticProps({
    params: params,
    preview: preview,
    prefixSlug: "/home",
    type: "home",
  });
}
