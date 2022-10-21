import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Receipt as Component } from "..";

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

export const Default = Template.bind({});
Default.args = {
  title: "Your order",
  items: [
    {
      id: "1",
      color: "#893AD8",
      discountPercentage: 30,
      price: 99.95,
      title: "Title",
      image: {
        src: "https://via.placeholder.com/80x120",
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
        src: "https://via.placeholder.com/80x120",
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
        src: "https://via.placeholder.com/80x120",
        width: 80,
      },
    },
  ],
};
