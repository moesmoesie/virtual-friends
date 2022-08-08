import React, { useEffect, useRef, useState } from "react";
import { Container, GradientText, Card, InfoCard } from "../../components";
import { HowWeWorkBlockProps } from "./types";
import { useScreen } from "../../hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { step } from "./types";

const HowWeWorkBlock: React.FC<HowWeWorkBlockProps> = (props) => {
  const screen = useScreen();
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)


  return (
    <Container>
      <div>
        <h2 className="display-1 mb-6">
          <GradientText>{props.title}</GradientText>
        </h2>
        <p className="body-3 medium:display-4 mb-8 large:mb-12 max-w-3xl">
          {props.body}
        </p>


        {screen === 'large' && (
          <div className="flex gap-5">
            {props.steps.map((el,index) => {
              return <Card className="flex-1" key={index}>
              <div className="px-4 py-6 text-center gap-6 flex flex-col items-center">
                <div className="text-teal-500">{el.icon}</div>
                <p className="body-3 font-bold">{el.title}</p>
                <p className="body-1">{el.body}</p>
              </div>
            </Card>
            })}
          </div>
        )}

        {screen === 'medium' && (
          <MediumCardsContainer steps={props.steps}/>
        )}


        {screen === 'small' && (
          <div className="flex gap-5 flex-col">
            {props.steps.map((el,index) => {
              return <InfoCard
              key={index}
              title={el.title}
              body={el.body}
              icon={el.icon}
              />
            })}
          </div>
        )}
      </div>
    </Container>
  );
};


const MediumCardsContainer : React.FC<{steps: step[]}> = (props) => {
  return <motion.div 
  dragConstraints={{right:0, left: -400}}
  drag='x' className="flex gap-5">
  {props.steps.map((el,index) => {
    return <div className="min-w-[200px]" key={index}>
    <Card className="h-full" >
    <div className="px-4 py-6 text-center gap-6 flex flex-col items-center">
      <div className="text-teal-500">{el.icon}</div>
      <p className="body-3 font-bold">{el.title}</p>
      <p className="body-1">{el.body}</p>
    </div>
  </Card>
  </div>
  })}
</motion.div>

}

export default HowWeWorkBlock;
