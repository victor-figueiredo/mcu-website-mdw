import type { Meta, StoryObj } from "@storybook/react";
import LoginForm from "./login";

const meta = {
  title: "Marvel/LoginForm/Login",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {};
