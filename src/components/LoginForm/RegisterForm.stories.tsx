import type { Meta, StoryObj } from "@storybook/react";
import SignUpForm from "./register";
import { InputProps } from "../../types";

const meta = {
  title: "Marvel/LoginForm/AccountRegister",
  component: SignUpForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<InputProps>;

export default meta;
type Story = StoryObj<InputProps>;

export const AccountRegister: Story = {};
