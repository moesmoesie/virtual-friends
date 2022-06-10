import type { NextPage, GetStaticProps } from "next";
import HomeLandingModule from "../modules/HomeLandingModule";
import { Container } from "ui";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      pageData: {},
    },
  };
};

const HomePage: NextPage = () => {
  return (
    <div className="max-w-[100vw] overflow-hidden">
      <div className=" w-full bg-DarkPurple/400">
        <Container className="z-50 py-4">
          <a className="body-3 font-bold uppercase text-Teal/500" href="#">
            Virtual Friends
          </a>
        </Container>
      </div>
      <HomeLandingModule />
      <div className="h-96 w-full bg-DarkPurple/600 "></div>
    </div>
  );
};

export default HomePage;
