import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Employee as Component } from "./employee";

export default {
  title: "Components/Employee",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
  return (
    <div className="h-[600px] w-[250px]">
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
    src: "https://cdn.sanity.io/images/kby5cprw/production/4395f182fa04851c14d7c54612ff4c5e15f28b80-663x849.png",
    width: 500,
    height: 0,
    alt: "John Doe",
  },
};
