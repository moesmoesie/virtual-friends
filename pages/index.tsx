import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import {
  PageBlock,
  HeaderBlock,
  FooterBlock,
  HomeLandingBlock,
  AboutBlock,
  OffersBlock,
} from "../lib/blocks";
import HowWeWorkBlock from "../lib/blocks/HowWeWorkBlock";

const HomePage: NextPage = () => {
  return (
    <div className="overflow-hidden">
      <PageBlock
        backgroundColor="#000000"
        header={<HeaderBlock />}
        footer={<FooterBlock />}
      >
        <HomeLandingBlock
          title={
            <span>
              <span>
                Hello, we are a<br />
                Web Development Agency
              </span>
            </span>
          }
          subtitle={
            <span>
              Lets brings those crazy web ideas you have into production.
            </span>
          }
          button="Lets Talk!"
        />

        <AboutBlock
          design_content="You designed or are in the procces of designing a piece of art (website) for yourself, company, or a client."
          design_title="You Design"
          develop_content="We build out your wonderfull designs and add backend functionality needed to go into production."
          develop_title="We Develop"
        />

        <div className="h-[50px] medium:h-[100px]  w-12" />

        <HowWeWorkBlock
          body="Praesent dignissim diam convallis augue convallis cursus. Vivamus vitae libero at mi ornare dictum sed quis diam. Duis sed odio"
          title="How We Work"
          steps={[
            {
              body: "Vestibulum tristique placerat suscipit. Pellentesque interdum arcu ac elit imperdiet volutpat",
              title: "Strategy",
              icon: (
                <FontAwesomeIcon
                  className="text-[22px] medium:text-[40px] text-teal-500"
                  icon={"plus"}
                />
              ),
            },
            {
              body: "Phasellus et scelerisque odio, sed venenatis ligula. Duis bibendum, dui ac dapibus fringilla, libero mi malesuada",
              title: "Backend",
              icon: (
                <FontAwesomeIcon
                  className="text-[22px] medium:text-[40px] text-teal-500"
                  icon={"code"}
                />
              ),
            },
            {
              body: "Sed eleifend ligula id risus euismod molestie. In ultrices dui a leo euismod volutpat. Aenean molestie",
              title: "Frontend",
              icon: (
                <FontAwesomeIcon
                  className="text-[22px] medium:text-[40px] text-teal-500"
                  icon={"paint-brush"}
                />
              ),
            },
            {
              body: "Pellentesque mi lectus, gravida sagittis pharetra eget, eleifend ut leo. Maecenas ac sapien quam.",
              title: "Quality Check",
              icon: (
                <FontAwesomeIcon
                  className="text-[22px] medium:text-[40px] text-teal-500"
                  icon={"check"}
                />
              ),
            },
            {
              body: "Etiam vehicula pretium diam. Ut accumsan ipsum quam, non pulvinar justo pulvinar quis. Nulla facilisis non",
              title: "Launch",
              icon: (
                <FontAwesomeIcon
                  className="text-[22px] medium:text-[40px] text-teal-500"
                  icon={"rocket"}
                />
              ),
            },
          ]}
        />

        <div className="h-[50px] medium:h-[100px]  w-12" />

        <OffersBlock
          title="What we offer"
          offers={[
            {
              type: "eccommerce",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor blandit diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              title: "E-commerce ",
              keywords: ["SENDCLOUD", "MOLLIE", "SENDGRID", "SHOPIFY API"],
            },
            {
              type: "company",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor blandit diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              title: "Company Website ",
              keywords: ["NEXTJS", "TAILWIND", "VERCEL"],
            },

            {
              type: "cms",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor blandit diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              title: "Content Mangement System",
              keywords: ["Sanity", "Strapi"],
            },

            {
              type: "pwa",
              body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor blandit diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              title: "Progressive Web App",
              keywords: ["react", "GOOGLE CLOUD PLATFORM", "Firebase"],
            },
          ]}
        />

        {/* <UniqueSellingPointsBlock
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
        /> */}

        <div className="py-[1000px]" />
      </PageBlock>
    </div>
  );
};

export default HomePage;
