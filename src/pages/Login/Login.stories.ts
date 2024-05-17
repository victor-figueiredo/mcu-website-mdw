import type { Meta, StoryObj } from "@storybook/react";

import LoginPage from "./index";

const meta = {
  title: "Marvel/Page/Login",
  component: LoginPage,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {};
