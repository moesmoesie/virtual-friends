import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Employee as Component } from "components/company/employee";

export default {
  title: "Company/Employee",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
  return (
    <div className="h-[600px]">
      <Component {...args} />
    </div>
  );
};

export const Employee = Template.bind({});
Employee.args = {
  company: "Company",
  name: "Name",
  phone: "+31634XXX366",
  github: "https://github.com/moesmoesie",
  linkedin: "https://www.linkedin.com/in/mustafadarwesh/",
  mail: "mdarwesh@virtualfriends.dev",
  image: {
    filename: "https://via.placeholder.com/200x200?text=placeholder",
    type: "normal",
    width: 80,
  },
};

Employee.parameters = {
  zeplinLink:
    "https://app.zeplin.io/project/631de5ac968559118b2e00fc/styleguide/components?coid=631de5bbbf3b5c13a9021e57",
};