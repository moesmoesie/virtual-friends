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
      color: "#7F95E3",
      id: "1",
      price: 124.95,
      title: "Virtual Boy X",
      discountPercentage: 10,
      image: {
        src: "https://cdn.sanity.io/images/kby5cprw/production/def68604fa15d693b04c9deb52c14c947cc82c37-800x800.png",
        width: 500,
        height: 0,
        alt: "Virtual Box X",
      },
    },
    {
      color: "#7F95E3",
      id: "2",
      price: 124.95,
      title: "Virtual Boy X",
      discountPercentage: 10,
      image: {
        src: "https://cdn.sanity.io/images/kby5cprw/production/def68604fa15d693b04c9deb52c14c947cc82c37-800x800.png",
        width: 500,
        height: 0,
        alt: "Virtual Box X",
      },
    },
  ],
};
