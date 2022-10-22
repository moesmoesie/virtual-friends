import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LandingHome as Component } from "../";
import React from "react";
import { GradientText } from "../../components";

export default {
  title: "Modules/Landing Home",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
  image: {
    src: "/images/headshot.jpg",
    width: "100",
  },
  subtitle:
    "We are a software development agency that can bring your web ideas into production",
  title: (
    <span>
      Your idea <br />
      <span>
        <GradientText>I will develop </GradientText>
      </span>
    </span>
  ),
  primaryCallToAction: "Lets Talk",
  secondaryCallToAction: "Github",
};
