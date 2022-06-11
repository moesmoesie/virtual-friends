import type { NextPage, GetStaticProps } from "next";
import { Header } from "ui";
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
        steps[]->{
          'body': content,
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
      }
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const parameters = {
    lang: "en-us",
  };

  const data = await getClient(false).fetch(query, parameters);
  console.log(data);
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
      <div className="h-96 w-full bg-DarkPurple/600 "></div>
    </div>
  );
};

export default HomePage;
