import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Popover as Component, OptionType } from "components/cms/popover";

export default {
  title: "CMS/Popover",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
  const options = [
    { name: "Small", value: "small" },
    { name: "Medium", value: "medium" },
    { name: "Large", value: "large" },
  ];

  const [currentOptionIndex, setCurrentOptionIndex] = useState(0);
  const setOption = (name: string) => {
    const newOption = options.findIndex((el) => el.name === name) ?? 0;
    setCurrentOptionIndex(newOption);
  };

  return (
    <div className="h-[600px]">
      <Component
        {...args}
        options={options}
        setOption={setOption}
        currentOptionIndex={currentOptionIndex}
      />
    </div>
  );
};

export const Popover = Template.bind({});
Popover.args = {};
