import type { Meta, StoryObj } from "@storybook/react";
import Logo from "./index";

const meta = {
  title: "Marvel/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    small: {
      control: "boolean",
    },
  },
} satisfies Meta<{ small?: boolean }>;

export default meta;
type Story = StoryObj<{ small?: boolean }>;

export const Navbar: Story = {
  args: {
    small: true,
  },
};

export const LoginPageLogo: Story = {
  args: {
    small: false,
  },
};
