import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Employee as Component } from "..";

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

export const Default = Template.bind({});
Default.args = {
  company: "Company",
  name: "Name",
  phone: "+31634XXX366",
  github: "https://github.com/moesmoesie",
  linkedin: "https://www.linkedin.com/in/mustafadarwesh/",
  mail: "mdarwesh@virtualfriends.dev",
  image: {
    src: "https://via.placeholder.com/200x200?text=placeholder",
    width: "80",
  },
};
