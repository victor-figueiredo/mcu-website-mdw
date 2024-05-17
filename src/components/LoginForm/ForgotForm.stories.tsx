import type { Meta, StoryObj } from "@storybook/react";
import ForgotPasswordForm from "./forgot";

const meta = {
  title: "Marvel/LoginForm/ForgotPassword",
  component: ForgotPasswordForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const ForgotPassword: Story = {};
