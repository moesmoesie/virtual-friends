import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Review as Component } from "components/company/review";

export default {
  title: "Company/Review",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
  return (
    <div className="h-[600px]">
      <Component {...args} />
    </div>
  );
};

export const Review = Template.bind({});
Review.args = {
  company: "Caboosy inc",
  name: "Jane Caboosy",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  image: {
    filename: "https://via.placeholder.com/200x200?text=placeholder",
    type: "normal",
    width: 80,
  },
};

Review.parameters = {
  zeplinLink:
    "https://app.zeplin.io/project/631de5ac968559118b2e00fc/styleguide/components?coid=631de5bacf48ef1611afb1c2",
};
