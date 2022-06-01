import type { NextPage, GetStaticProps } from "next";
import { Home, type HomeProps } from "ui";

interface Props {
    pageData : HomeProps
}

export const getStaticProps: GetStaticProps = async () => {
 
  const data: Props = {
    pageData : {
      modules: []
    }
  };

  return {
    props: data,
  };
};

const HomePage: NextPage<Props> = (props) => {
  return <Home {...props.pageData} />;
};

export default HomePage;
