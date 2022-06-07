import type { NextPage, GetStaticProps } from "next";
import { Home } from "ui";
import { getClient } from "../lib/cms/sanity.server";

const query = `
  *[_type == 'homePage' && _lang == $lang][0]{
    'id' : _id,
    'lang' : _lang,
    modules[]{
      'type' : _type,
      'key' : _key,
      _type == 'homeLandingModule' => {
        title,
        subtitle
      }
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await getClient(false).fetch(query, {
    lang: "en-us",
  });

  return {
    props: {
      pageData,
    },
  };
};

const HomePage: NextPage<PageType> = (props) => {
  return <Home {...props.pageData} />;
};

export default HomePage;
