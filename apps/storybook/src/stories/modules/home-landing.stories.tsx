import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HomeLanding as Component } from "ui-modules";

export default {
  title: "Modules/Home Landing",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const HomeLanding = Template.bind({});
HomeLanding.args = {
  module: {
    backgroundColor: "transparent",
    padding: "0px",
    scrollMargin: 0,
  },
  title: `You Desing<br/>We Develop`,
  subtitle:
    "We are a software development agency that can bring your web ideas into production",
};
