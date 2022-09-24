import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Review as Component } from "ui";

export default {
  title: "Components/Employee",
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
  company: "Company",
  name: "Firstname",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  image: {
    filename: "https://via.placeholder.com/200x200?text=placeholder",
    type: "normal",
    width: 80,
  },
};
