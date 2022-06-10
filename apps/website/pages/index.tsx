import type { NextPage, GetStaticProps } from "next";
import HomeLandingModule from "../modules/HomeLandingModule";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      pageData: {},
    },
  };
};

const HomePage: NextPage = () => {
  return (
    <div>
      <HomeLandingModule />
    </div>
  );
};

export default HomePage;
