import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./index";

const meta = {
  title: "Marvel/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonType: "default",
    label: "Ver detalhes",
    type: "submit",
  },
};

export const Login: Story = {
  args: {
    buttonType: "login",
    label: "Entrar",
    type: "submit",
  },
};

export const Filter: Story = {
  args: {
    buttonType: "filter",
    label: "Limpar filtros",
    type: "submit",
  },
};
