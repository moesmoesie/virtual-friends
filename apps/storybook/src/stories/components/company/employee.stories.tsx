import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Employee as Component } from "ui/components/company";

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
    filename: "https://via.placeholder.com/200x200?text=placeholder",
    type: "normal",
    width: 80,
  },
};

Default.parameters = {
  zeplinLink:
    "https://app.zeplin.io/project/631de5ac968559118b2e00fc/styleguide/components?coid=631de5bbbf3b5c13a9021e57",
};
