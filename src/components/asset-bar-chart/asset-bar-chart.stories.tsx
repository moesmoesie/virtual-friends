import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AssetBarChart as Component } from "./asset-bar-chart";

export default {
  title: "Components/Bar Chart Card",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <div className="w-full h-[300px]">
    <Component {...args} />
  </div>
);

export const ThisWeeksEarnings = Template.bind({});
ThisWeeksEarnings.args = {
  title: "This weeks earnings",
  amount: 300000,
  currency: "euro",
  values: [0.9, 0.87, 0.4, 0.9, 0.84, 1, 0.5, 0.4, 0.3],
};

export const ThisMonthsEarnings = Template.bind({});
ThisMonthsEarnings.args = {
  title: "This months earnings",
  amount: 300000,
  currency: "euro",
  values: [0.9, 0.87, 0.4, 0.9, 0.84, 1, 0.5, 0.4, 0.3, 0.3, 0.3, 0.3],
};
