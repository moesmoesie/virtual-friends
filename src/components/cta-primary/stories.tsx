import type { Meta, StoryObj } from "@storybook/react";

import Component from "./component";

const meta: Meta<typeof Component> = {
  title: "Components/CTA Primary",
  component: Component,
  parameters: {
    controls: { exclude: ["onClick"] },
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    label: "Our Story",
  },
};

export const Hover: Story = {
  args: {
    label: "Our Story",
  },
  parameters: { pseudo: { hover: true } },
};

export const Focus: Story = {
  args: {
    label: "Our Story",
  },
  parameters: { pseudo: { focus: true } },
};

export const Active: Story = {
  args: {
    label: "Our Story",
  },
  parameters: { pseudo: { active: true } },
};
