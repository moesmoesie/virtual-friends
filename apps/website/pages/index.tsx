import type { NextPage, GetStaticProps } from "next";
import { Header, Footer } from "ui";
import { Module } from "../modules";
import { groq } from "next-sanity";
import { getClient } from "../lib/cms/sanity.server";

const query = groq`
  *[_type == 'homePage' && _lang == $lang][0]{
    'modules' : modules[]{
      'type': _type,
      'key': _key,
      _type == 'homeLandingModule' => {
        title,
        subtitle,
        button->{
          content
        }
      },
      _type == 'homeAboutModule' => {
        design_content,
        design_title,
        develop_title,
        develop_content
      },
      _type == 'homeHowWeWorkModule' => {
        title,
        'body': content,
        steps[]{
          body,
          title
        }
      },
      _type == 'homeOffersModule' => {
        title,
        offers[] {
          title,
          'body' : content,
          keywords
        }
      },
      _type == 'homeUniqueSellingPointsModule' => {
        title,
        uniqueSellingPoints[] {
          title,
          body,
        }
      }
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const parameters = {
    lang: "en-us",
  };

  const data = await getClient(false).fetch(query, parameters);

  return {
    props: {
      pageData: data,
    },
  };
};

const HomePage: NextPage<{ pageData: any }> = ({ pageData }) => {
  return (
    <div>
      <Header />
      {pageData.modules.map((module: any) => {
        return <Module key={module.key} type={module.type} data={module} />;
      })}
      <div className="mt-12 h-[50rem] w-full bg-DarkPurple/600" />
      <Footer />
    </div>
  );
};

export default HomePage;
