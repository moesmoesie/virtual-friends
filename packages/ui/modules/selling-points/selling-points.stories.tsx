import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SellingPoints as Component } from "..";
import React from "react";

export default {
  title: "Modules/Selling Points",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
  sellingPoints: [
    {
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in morbi ultrices aliquam du.adipiscing",
      icon: <div className=" w-full h-full bg-danger" />,
      title: "Card Title",
    },
    {
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in morbi ultrices aliquam du.adipiscing",
      icon: <div className=" w-full h-full bg-danger" />,
      title: "Card Title",
    },
    {
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in morbi ultrices aliquam du.adipiscing",
      icon: <div className=" w-full h-full bg-danger" />,
      title: "Card Title",
    },
    {
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in morbi ultrices aliquam du.adipiscing",
      icon: <div className=" w-full h-full bg-danger" />,
      title: "Card Title",
    },
    {
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in morbi ultrices aliquam du.adipiscing",
      icon: <div className=" w-full h-full bg-danger" />,
      title: "Card Title",
    },
    {
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in morbi ultrices aliquam du.adipiscing",
      icon: <div className=" w-full h-full bg-danger" />,
      title: "Card Title",
    },
  ],
};
