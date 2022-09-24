import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Picker as Component } from "ui-components";
import { useState } from "react";

export default {
  title: "Components/Input/Picker",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="h-[600px]">
      <Component
        {...args}
        onChange={(index) => setCurrent(index)}
        current={current}
      />
    </div>
  );
};

export const Picker = Template.bind({});
Picker.args = {
  name: "label",
  label: "Label",
  isRequired: true,
  options: ["Content", "Content", "Content", "Content"],
};
