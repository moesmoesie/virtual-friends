import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BuisnessCard as Component } from "ui";

export default {
  title: "Buisness Card",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <div className="h-[500px]">
    <Component {...args} />
  </div>
);

export const BuisnessCard = Template.bind({});
BuisnessCard.args = {
  address: "Van Nelleweg 1",
  postalcode: "3044 BC Rotterdam",
  country: "The Netherlands",
  telephone: "+3123456789",
  email: "name@example.dev",
  kvk: "0123456789",
  btw: "0123456789",
  city: "Rotterdam",
};
