import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Picker as Component } from "./picker";
import { useState } from "react";

export default {
  title: "Components/Picker",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="h-[600px]">
      <Component {...args} onChange={(index) => setCurrent(index)} current={current} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: "label",
  label: "Label",
  isRequired: true,
  options: ["Content", "Content", "Content", "Content"],
};
