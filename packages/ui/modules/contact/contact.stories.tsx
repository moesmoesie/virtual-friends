import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Contact as Component } from "..";
import React from "react";

export default {
  title: "Modules/Contact",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Let's Talk",
  image: {
    src: "/images/headshot.jpg",
    width: "100",
  },
  body: "Wil je met mij sparren over jouw designvraagstuk? Dat kan! Neem contact met me op via hi@daanpothoven.nl, LinkedIn of 0638296775. Ik hoor graag wie je bent en wat ik als UX/UI designer voor je kan betekenen. Ik ben bereikbaar van ma t/m do.",
  primaryCallToAction: "Send a Mail",
  secondaryCallToAction: "Connect with Linkedin",
  buisnessCard: {
    address: "Van Nelleweg 1",
    postalcode: "3044 BC Rotterdam",
    country: "The Netherlands",
    telephone: "+3123456789",
    email: "name@example.dev",
    kvk: "0123456789",
    btw: "0123456789",
    city: "Rotterdam",
  },
};
