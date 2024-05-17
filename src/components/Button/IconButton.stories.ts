import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { CleanFilterButton } from "./index";
import { ButtonProps } from "../../types";

const meta = {
  title: "Marvel/Button/IconButton",
  component: CleanFilterButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn(), buttonType: "filter", type: "submit" },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const IconButton: Story = {};
