import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ImagePicker as Component } from "ui-components";

export default {
  title: "Components/Image Picker",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <div className="h-[600px]">
    <Component {...args} />
  </div>
);

export const ImagePicker = Template.bind({});
ImagePicker.args = {};
