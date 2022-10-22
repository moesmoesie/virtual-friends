import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Footer as Component } from "..";
import React from "react";
import { GradientText } from "../../components";

export default {
  title: "Modules/Footer",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
  links: ["Privacy Policy", "Cookie Policy"],
};
