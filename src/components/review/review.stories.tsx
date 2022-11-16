import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Review as Component } from "..";

export default {
  title: "Components/Review",
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
  company: "Company",
  name: "Firstname",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  image: {
    src: "https://cdn.sanity.io/images/kby5cprw/production/00719dd13aa9d16f6e716dac3d7e6a26dc4ddab6-3276x4096.jpg",
    width: 100,
    height: 100,
    alt: "Jane Caboosy",
  },
};
