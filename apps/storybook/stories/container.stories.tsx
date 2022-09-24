import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Container as Component } from "ui";

export default {
  title: "Components/Container",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Container = Template.bind({});
Container.args = {
  backgroundColor: "black",
  padding: "100px 100px",
};
