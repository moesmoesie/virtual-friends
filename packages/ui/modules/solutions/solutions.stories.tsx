import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Solutions as Component } from "..";
import React from "react";

export default {
  title: "Modules/Solutions",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Solutions",
  solutions: [
    {
      title: "Buisness",
      keywords: ["Content", "Content"],
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor blandit diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },

    {
      title: "Buisness",
      keywords: ["Content", "Content"],
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor blandit diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },

    {
      title: "Buisness",
      keywords: ["Content", "Content"],
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor blandit diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },

    {
      title: "Buisness",
      keywords: ["Content", "Content"],
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor blandit diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },

    {
      title: "Buisness",
      keywords: ["Content", "Content"],
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor blandit diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ],
};
