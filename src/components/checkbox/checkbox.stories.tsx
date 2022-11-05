import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox as Component } from "..";
import { useState } from "react";

export default {
  title: "Components/Checkbox",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
  const [isSelected, setSelected] = useState(false);

  return (
    <div className="h-[600px]">
      <Component
        {...args}
        isSelected={isSelected}
        onChange={(isSelected) => setSelected(isSelected)}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  text: "Item",
};
