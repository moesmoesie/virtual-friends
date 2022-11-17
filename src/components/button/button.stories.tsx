import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Button } from "./button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div className="h-[300px] w-full">
    <Button {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  type: "default",
  text: "Button",
};

export const Outlined = Template.bind({});
Outlined.args = {
  type: "outlined",
  text: " Button ",
};
