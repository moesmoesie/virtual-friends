import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Receipt as Component } from "ui";

export default {
  title: "Components/Receipt",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
  return (
    <div className="h-[600px]">
      <Component {...args} />
    </div>
  );
};

export const Receipt = Template.bind({});
Receipt.args = {
  title: "Your order",
  items: [
    {
      id: "1",
      color: "#893AD8",
      discountPercentage: 30,
      price: 99.95,
      title: "Title",
      image: {
        filename: "https://via.placeholder.com/80x120",
        type: "normal",
        width: 80,
      },
    },
    {
      id: "1",
      color: "#893AD8",
      discountPercentage: 30,
      price: 99.95,
      title: "Title",
      image: {
        filename: "https://via.placeholder.com/80x120",
        type: "normal",
        width: 80,
      },
    },
    {
      id: "2",
      color: "#893AD8",
      discountPercentage: 30,
      price: 99.95,
      title: "Title",
      image: {
        filename: "https://via.placeholder.com/80x120",
        type: "normal",
        width: 80,
      },
    },
  ],
};

Receipt.parameters = {
  zeplinLink:
    "https://app.zeplin.io/project/631de5ac968559118b2e00fc/styleguide/components?coid=631de5b6e15f86157ed4786b",
};
