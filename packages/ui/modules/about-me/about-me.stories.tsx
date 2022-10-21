import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AboutMe as Component } from "..";
import React from "react";

export default {
  title: "Modules/About Me",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "About me",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed integer maecenas amet. Scelerisque tortor orci iaculis a, dictum iaculis mollis eget sed. In a, amet odio congue suspendisse ut. Gravida aliquam arcu consequat quis vitae nec sit pharetra. Pretium hendrerit viverra molestie diam metus euismod erat. Malesuada fermentum diam pulvinar ac dolor tortor. Urna praesent id eu morbi consectetur tellus.",
};
