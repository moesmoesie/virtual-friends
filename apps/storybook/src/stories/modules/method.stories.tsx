import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Method as Component } from "ui-modules";

export default {
  title: "Modules/Methods",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const HomeLanding = Template.bind({});
HomeLanding.args = {
  module: {
    backgroundColor: "transparent",
    padding: "0px",
    scrollMargin: 0,
  },
  title: "How We Work",
  body: "Our goal is to make designs come to life and  minimise the restrictions creatives deal with when creating for the web.",
  methods: [
    {
      title: "Card Title",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in morbi ultrices aliquam du.adipiscing",
      icon: <div />,
    },

    {
      title: "Card Title",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in morbi ultrices aliquam du.adipiscing",
      icon: <div />,
    },

    {
      title: "Card Title",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in morbi ultrices aliquam du.adipiscing",
      icon: <div />,
    },
    {
      title: "Card Title",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in morbi ultrices aliquam du.adipiscing",
      icon: <div />,
    },

    {
      title: "Card Title",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in morbi ultrices aliquam du.adipiscing",
      icon: <div />,
    },
    {
      title: "Card Title",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in morbi ultrices aliquam du.adipiscing",
      icon: <div />,
    },
  ],
};
