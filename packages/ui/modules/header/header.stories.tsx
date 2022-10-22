import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header as Component } from "..";
import React from "react";
import { GradientText } from "../../components";

export default {
  title: "Modules/Header",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
  links: ["How we work", "What we offer", "Contact  "],
};
