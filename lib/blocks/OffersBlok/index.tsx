import React, { useEffect, useRef, useState } from "react";
import { GradientText, RichText, StoryblokImage } from "../../components";
import { Container } from "../../components";
import { Blok } from "../types";
import { storyblokEditable } from "@storyblok/react";
import Ecommerce from "./Ecommerce";
import Company from "./Company";
import ContentMangementSystem from "./ContentMangementSystem";
import ProgressiveWebApp from "./ProgressiveWebApp";
import { Chip } from "../../components";
import { ProductSectionProps } from "./types";
import { motion, useInView, useViewportScroll } from "framer-motion";
import { reverse } from "dns";

const OffersBlock: React.FC<{ blok: Blok }> = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)} className="relative">
      <Container module={blok}>
        <h2 className="display-1 mb-9 relative z-[10] large:mb-64">
          <GradientText>{blok?.title}</GradientText>
        </h2>

        <div className="flex relative flex-col gap-14 medium:gap-28 large:gap-96">
          {blok?.products?.map((el: Blok, index: number) => {
            const keywords = el.keywords.split(",");
            return (
              <div {...storyblokEditable(el)} key={el._uid}>
                <ProductSection
                  reverse={index % 2 === 0}
                  body={el?.body}
                  title={el?.title}
                  keywords={keywords}
                  image={el?.image}
                  components={<ProductComponent name={el?.type} />}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

const ProductComponent: React.FC<{ name: string }> = ({ name }) => {
  if (name === "ecommerce") return <Ecommerce />;
  if (name === "cms") return <ContentMangementSystem />;
  if (name === "pwa") return <ProgressiveWebApp />;
  if (name === "company") return <Company />;
  return <Ecommerce />;
};

const ProductSection: React.FC<ProductSectionProps> = (props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(scrollRef, { once: true });
  const [show, setShow] = useState(false);

  const icon = {
    show: { filter: "blur(0px)" },
    hidden: { filter: "blur(24px)" },
  };

  const components = {
    hidden: {
      opacity: 0,
      x: props.reverse ? -100 : 100,
    },
    show: {
      opacity: 1,
      x: 0,
    },
  };

  useEffect(() => {
    if (isInView) {
      console.log(isInView);
      setShow(true);
    }
  }, [isInView]);

  return (
    <div
      className={`w-full flex ${
        props.reverse ? "large:flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="max-w-xl grid gap-4 medium:gap-6 w-full">
        <h3 className="display-3">{props.title}</h3>
        <p className="body-3">{props.body}</p>
        <ul className="flex flex-wrap  gap-3">
          {props.keywords.map((keyword: string, index: number) => {
            return (
              <li key={index}>
                <Chip value={keyword} />
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className={`flex-1 relative hidden large:block ${
          props.reverse ? "-translate-x-16" : "translate-x-16"
        }`}
      >
        <div
          ref={scrollRef}
          className="absolute w-[12px] h-[12px] left-1/2 top-full -translate-x-1/2 -translate-y-1/2"
        ></div>
        <div className="absolute w-[600px] h-[600px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            variants={icon}
            initial={"hidden"}
            animate={show ? "hidden" : "show"}
            transition={{ duration: 0.7 }}
          >
            <StoryblokImage
              className="w-full object-cover h-full  "
              {...props?.image}
            />
          </motion.div>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            variants={components}
            initial={"hidden"}
            animate={show ? "show" : "hidden"}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {props.components}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OffersBlock;
