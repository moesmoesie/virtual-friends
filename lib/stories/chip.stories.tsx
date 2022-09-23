import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Image } from "../components/image";
import { Chip } from "components/chip";

export default {
  title: "Chip",
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => (
  <div className="h-[500px]">
    <Chip {...args} />
  </div>
);

export const Fill = Template.bind({});
Fill.args = {
  text: "Content",
  variant: "active",
};

export const Outline = Template.bind({});
Outline.args = {
  text: "Content",
  variant: "nonActive",
};
