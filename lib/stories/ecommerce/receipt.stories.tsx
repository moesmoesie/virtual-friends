import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Receipt as Component } from "components/ecommerce/receipt";

export default {
  title: "Ecommerce/Receipt",
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
      count: 1,
      item: {
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
    },

    {
      count: 2,
      item: {
        id: "1",
        color: "#ffffff",
        discountPercentage: 30,
        price: 40.25,
        title: "Title 3",
        image: {
          filename: "https://via.placeholder.com/80x120",
          type: "normal",
          width: 80,
        },
      },
    },
  ],
};

Receipt.parameters = {
  zeplinLink:
    "https://app.zeplin.io/project/631de5ac968559118b2e00fc/styleguide/components?coid=631de5b6e15f86157ed4786b",
};
