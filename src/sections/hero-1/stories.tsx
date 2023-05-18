import type { Meta, StoryObj } from "@storybook/react";

import Section from "./component";

const meta: Meta<typeof Section> = {
  title: "Sections/Hero1",
  component: Section,
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Mobile: Story = {
  args: {
    title: "We teach Afghan Girls to code",
    subtitle: "We believe that woman have the power to uplift an entire country",
  },

  parameters: {
    layout: "fullscreen",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/khJG8n9SuNKpjuFqJnKiRa/CTI%3A-Design?type=design&t=cEeRsTJ1pX6ZDEpP-1",
    },
    viewport: {
      defaultViewport: "mobile",
    },
  },
};

export const Tablet: Story = {
  args: {
    title: "We teach Afghan Girls to code",
    subtitle: "We believe that woman have the power to uplift an entire country",
  },

  parameters: {
    layout: "fullscreen",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/khJG8n9SuNKpjuFqJnKiRa/CTI%3A-Design?type=design&t=cEeRsTJ1pX6ZDEpP-1",
    },
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

export const Laptop: Story = {
  args: {
    title: "We teach Afghan Girls to code",
    subtitle: "We believe that woman have the power to uplift an entire country",
  },

  parameters: {
    layout: "fullscreen",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/khJG8n9SuNKpjuFqJnKiRa/CTI%3A-Design?type=design&t=cEeRsTJ1pX6ZDEpP-1",
    },
    viewport: {
      defaultViewport: "laptop",
    },
  },
};

export const Desktop: Story = {
  args: {
    title: "We teach Afghan Girls to code",
    subtitle: "We believe that woman have the power to uplift an entire country",
  },

  parameters: {
    layout: "fullscreen",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/khJG8n9SuNKpjuFqJnKiRa/CTI%3A-Design?type=design&t=cEeRsTJ1pX6ZDEpP-1",
    },
    viewport: {
      defaultViewport: "desktop",
    },
  },
};
