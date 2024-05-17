import type { Meta, StoryObj } from "@storybook/react";
import StarRating from "./index";

const meta = {
  title: "Marvel/Rating",
  component: StarRating,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    rating: {
      control: {
        type: "range",
        min: 0,
        max: 5,
      },
    },
  },
} satisfies Meta<{ rating: number }>;

export default meta;
type Story = StoryObj<{ rating: number }>;

export const Default: Story = {
  args: {
    rating: 0,
  },
};

export const Medium: Story = {
  args: {
    rating: 3,
  },
};

export const Max: Story = {
  args: {
    rating: 5,
  },
};
