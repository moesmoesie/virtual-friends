import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Review as Component } from "ui/components/company";

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
    filename: "https://via.placeholder.com/200x200?text=placeholder",
    type: "normal",
    width: 80,
  },
};
