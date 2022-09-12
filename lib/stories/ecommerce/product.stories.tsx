import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Product as Component } from "components/ecommerce/product";

export default {
  title: "Ecommerce/Product",
  component: Component,
  parameters: {
    zeplinLink:
      "https://app.zeplin.io/project/631de5ac968559118b2e00fc/styleguide/components?coid=631de5badc961513bd37910d",
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
  return (
    <div>
      <Component
        {...args}
        currentProductId="1"
        setCurrentProductId={() => console.log("hello")}
      />
    </div>
  );
};

export const Product = Template.bind({});
Product.args = {
  discountPercentage: 30,
  products: [
    {
      id: "1",
      color: "#893AD8",
      discountPercentage: 30,
      price: "89,95",
      title: "Virtual Boy",
      image: {
        filename:
          "https://a.storyblok.com/f/170199/165x160/86df839329/gameboy.png",
        width: 300,
      },
    },
    {
      id: "2",
      color: "#333333",
      discountPercentage: 30,
      price: "89,95",
      title: "Virtual Boy",
      image: {
        filename:
          "https://a.storyblok.com/f/170199/165x160/86df839329/gameboy.png",
        width: 300,
      },
    },
    {
      id: "3",
      color: "#ffffff",
      discountPercentage: 30,
      price: "89,95",
      title: "Virtual Boy",
      image: {
        filename:
          "https://a.storyblok.com/f/170199/165x160/86df839329/gameboy.png",
        width: 300,
      },
    },
  ],
};

Product.parameters = {
  zeplinLink:
    "https://app.zeplin.io/project/631de5ac968559118b2e00fc/styleguide/components?coid=631de5b552eec6149bbb6e67",
};
