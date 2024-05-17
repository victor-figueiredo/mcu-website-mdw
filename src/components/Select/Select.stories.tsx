import type { Meta, StoryObj } from "@storybook/react";
import { SelectProps } from "../../types";
import SelectComponent from "./index";

const meta = {
  title: "Marvel/OderBySelect",
  component: SelectComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<SelectProps>;

export default meta;
type Story = StoryObj<SelectProps>;

export const Default: Story = {
  args: {
    selectedOption: "none",
  },
};

export const Cronology: Story = {
  args: {
    selectedOption: "primary_release_date.desc",
  },
};

export const Release: Story = {
  args: {
    selectedOption: "primary_release_date.asc",
  },
};
