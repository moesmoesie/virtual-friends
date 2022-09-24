import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HomeLanding } from "ui-modules";

export default {
  title: "Modules/Home Landing",
  component: HomeLanding,
} as ComponentMeta<typeof HomeLanding>;

const Template: ComponentStory<typeof HomeLanding> = (args) => (
  <HomeLanding {...args} />
);

export const Default = Template.bind({});
Default.args = {
  module: {},
  title: "You Design We Develop",
  subtitle:
    "We are a software development agency that can bring your web ideas into production",
};
