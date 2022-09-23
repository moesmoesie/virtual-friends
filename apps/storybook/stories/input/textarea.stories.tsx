import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Textarea as Component } from "ui";

export default {
  title: "Input/Textarea",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <div className="h-[600px]">
    <Component {...args} />
  </div>
);

export const Empty = Template.bind({});
Empty.args = {
  name: "label",
  label: "Label",
  isRequired: true,
  placeholder: "Text",
};

export const Error = Template.bind({});
Error.args = {
  name: "label",
  label: "Label",
  value: "Text",
  isRequired: true,
  placeholder: "Text",
  error: "This field has an error!",
};

export const Success = Template.bind({});
Success.args = {
  name: "label",
  label: "Label",
  success: true,
  value: "A complex form might have multiple input fields",
  isRequired: true,
  placeholder: "Text",
};

export const Active = Template.bind({});
Active.args = {
  name: "label",
  label: "Label",
  value: "A complex form might..",
  isRequired: true,
  placeholder: "Text",
};
