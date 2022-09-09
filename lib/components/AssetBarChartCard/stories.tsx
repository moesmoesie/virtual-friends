import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Component from ".";

export default {
  title: "Ecommerce/BarChartCard",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <div className="w-full h-[300px]">
    <Component {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  amount: 300000,
  gainPercentage: 23,
  values: [0.9, 0.87, 0.4, 0.9, 0.84, 1, 0.5, 0.4, 0.3],
};

export const Secondary = Template.bind({});
Secondary.args = {
  amount: 300000,
  gainPercentage: 12,
  values: [0.2, 0.8, 0.4, 0.3, 0.84, 0.2, 0.5, 0.1, 0.9],
};
