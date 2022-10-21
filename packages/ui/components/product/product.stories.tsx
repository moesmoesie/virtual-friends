import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Product as Component } from "..";

export default {
  title: "Components/Product",
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
  products: [
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
      color: "#ffffff",
      discountPercentage: 30,
      price: 89.95,
      title: "Title 2",
      image: {
        src: "https://via.placeholder.com/100x120",
        width: 80,
      },
    },
    {
      id: "3",
      color: "#333333",
      discountPercentage: 30,
      price: 100.95,
      title: "Title 3",
      image: {
        src: "https://via.placeholder.com/200x300",
        width: 80,
      },
    },
    {
      id: "4",
      color: "#e6e6e6",
      discountPercentage: 30,
      price: 79.95,
      title: "Title 4",
      image: {
        src: "https://via.placeholder.com/120x120",
        width: 80,
      },
    },
  ],
};
