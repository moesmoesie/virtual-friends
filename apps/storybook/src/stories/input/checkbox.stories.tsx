import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox as Component } from "ui";
import { useState } from "react";

export default {
  title: "Components/Input/Checkbox",
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

export const Checkbox = Template.bind({});
Checkbox.args = {
  text: "Item",
};
