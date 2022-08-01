import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import {
  PageBlock,
  HeaderBlock,
  FooterBlock,
  HomeLandingBlock,
} from "../lib/blocks";
import HowWeWorkBlock from "../lib/blocks/HowWeWorkBlock";
import UniqueSellingPointsBlock from "../lib/blocks/UniqueSellingPointsBlock";

import { GradientText } from "../lib/components";

const HomePage: NextPage = () => {
  return (
    <div>
      <PageBlock
        backgroundColor="#000000"
        header={<HeaderBlock />}
        footer={<FooterBlock />}
      >
        <HomeLandingBlock
          title={
            <span>
              Your friendly guides through the&nbsp;
              <GradientText>virtual World</GradientText>
            </span>
          }
          subtitle="We are a web development agency that can bring your web designs into production"
          button="Lets Talk!"
        />

        <HowWeWorkBlock
          body="Praesent dignissim diam convallis augue convallis cursus. Vivamus vitae libero at mi ornare dictum sed quis diam. Duis sed odio"
          title="How We Work"
          steps={[
            {
              body: "Vestibulum tristique placerat suscipit. Pellentesque interdum arcu ac elit imperdiet volutpat",
              title: "Strategy",
              icon: <FontAwesomeIcon size="2x" icon={"plus"} />,
            },
            {
              body: "Phasellus et scelerisque odio, sed venenatis ligula. Duis bibendum, dui ac dapibus fringilla, libero mi malesuada",
              title: "Backend",
              icon: <FontAwesomeIcon size="2x" icon={"code"} />,
            },
            {
              body: "Sed eleifend ligula id risus euismod molestie. In ultrices dui a leo euismod volutpat. Aenean molestie",
              title: "Frontend",
              icon: <FontAwesomeIcon size="2x" icon={"paint-brush"} />,
            },
            {
              body: "Pellentesque mi lectus, gravida sagittis pharetra eget, eleifend ut leo. Maecenas ac sapien quam.",
              title: "Quality Check",
              icon: <FontAwesomeIcon size="2x" icon={"check"} />,
            },
            {
              body: "Etiam vehicula pretium diam. Ut accumsan ipsum quam, non pulvinar justo pulvinar quis. Nulla facilisis non",
              title: "Launch",
              icon: <FontAwesomeIcon size="2x" icon={"rocket"} />,
            },
          ]}
        />

        <UniqueSellingPointsBlock
          uniqueSellingPoints={[
            {
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in morbi ultrices aliquam du.",
              title: "Performance",
              icon: { iconName: "plus", prefix: "fas" },
            },
            {
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in morbi ultrices aliquam du.",
              title: "Performance",
              icon: { iconName: "plus", prefix: "fas" },
            },
            {
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in morbi ultrices aliquam du.",
              title: "Performance",
              icon: { iconName: "plus", prefix: "fas" },
            },
            {
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in morbi ultrices aliquam du.",
              title: "Performance",
              icon: { iconName: "plus", prefix: "fas" },
            },
            {
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in morbi ultrices aliquam du.",
              title: "Performance",
              icon: { iconName: "plus", prefix: "fas" },
            },
            {
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in morbi ultrices aliquam du.",
              title: "Performance",
              icon: { iconName: "plus", prefix: "fas" },
            },
          ]}
        />
        <div className="py-[1000px]" />
      </PageBlock>
    </div>
  );
};

export default HomePage;
