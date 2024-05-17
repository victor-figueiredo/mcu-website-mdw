import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Checkbox from "./index";
import { CheckboxProps } from "../../types";

const meta = {
  title: "Marvel/Input/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: {
      action: "onChange",
    },
    checked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    name: "save-login",
    id: "save-login",
    label: "Salvar login",
    checked: true,
    disabled: false,
    onChange: fn(),
  },
} satisfies Meta<CheckboxProps>;

export default meta;
type Story = StoryObj<CheckboxProps>;

export const InputCheckbox: Story = {};
