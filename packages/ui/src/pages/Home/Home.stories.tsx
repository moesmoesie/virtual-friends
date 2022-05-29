import React from "react";
import { ComponentStory, type ComponentMeta } from "@storybook/react";
import Component from "./Home";

export default {
  title: "Pages/Home",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Home = Template.bind({});
Home.args = {
  hero_title: "hello world!",
};
