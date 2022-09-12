import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../components/Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div className="w-full h-[300px]">
    <Button {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  type: "default",
  text: "Button",
};

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/jNHHDpJ0dyOuogzw7B4iqM/Virtual-Friends-Website-Light-mode?node-id=1495%3A1176",
  },
};

export const Outlined = Template.bind({});
Outlined.args = {
  type: "outlined",
  text: " Button ",
};

Outlined.parameters = {
  zeplinLink:
    "https://app.zeplin.io/project/631de5ac968559118b2e00fc/styleguide/components?coid=631de5b56d0b4711589f52bb",
};
