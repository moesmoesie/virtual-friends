import React from "react";
import { ComponentStory, type ComponentMeta } from "@storybook/react";
import Component from "./Button";

export default {
  title: "Components/Button",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Button = Template.bind({});
Button.args = {
  text: "Hello World!",
};
