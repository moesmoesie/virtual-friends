import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Image, Card } from "ui";

export default {
  title: "Components/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <div className="h-[500px]">
    <Card
      {...args}
      icon={
        <Image
          fill={false}
          filename="https://a.storyblok.com/f/170199/2400x2400/c56fb8d398/euro-dynamic-gradient.png"
          width={200}
          height={200}
        />
      }
    />
  </div>
);

export const Vertical = Template.bind({});
Vertical.args = {
  title: "Card Title",
  mode: "vertical",
  size: "normal",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in morbi ultrices aliquam du.adipiscing",
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  mode: "horizontal",
  size: "normal",
  title: "Card Title",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in morbi ultrices aliquam du.adipiscing",
};

export const VerticalLarge = Template.bind({});
VerticalLarge.args = {
  mode: "vertical",
  size: "large",
  title: "Card Title",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in morbi ultrices aliquam du.adipiscing",
};
