import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { StoryblokImage } from "../components";

import { Card } from "../components/card";

export default {
  title: "Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <div className="h-[500px]">
    <Card
      {...args}
      icon={
        <StoryblokImage
          is_external_url={false}
          fill={false}
          filename="https://a.storyblok.com/f/170199/2400x2400/c56fb8d398/euro-dynamic-gradient.png"
          width={200}
          height={200}
        />
      }
    />
  </div>
);

export const Vertical = Template.bind({});
Vertical.args = {
  title: "Card Title",
  mode: "vertical",
  size: "normal",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in morbi ultrices aliquam du.adipiscing",
};

Vertical.parameters = {
  zeplinLink:
    "https://app.zeplin.io/project/631de5ac968559118b2e00fc/styleguide/components?coid=631de5b530b4cd0fa85ab84e",
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  mode: "horizontal",
  size: "normal",
  title: "Card Title",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in morbi ultrices aliquam du.adipiscing",
};

Horizontal.parameters = {
  zeplinLink:
    "https://app.zeplin.io/project/631de5ac968559118b2e00fc/styleguide/components?coid=631de5b5a15baa13e45bac0e",
};

export const VerticalLarge = Template.bind({});
VerticalLarge.args = {
  mode: "vertical",
  size: "large",
  title: "Card Title",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in morbi ultrices aliquam du.adipiscing",
};

VerticalLarge.parameters = {
  zeplinLink:
    "https://app.zeplin.io/project/631de5ac968559118b2e00fc/styleguide/components?coid=631de5b552eec6149bbb6e67",
};
