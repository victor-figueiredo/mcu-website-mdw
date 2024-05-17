import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Input } from "./index";
import { InputProps } from "../../types";

const meta = {
  title: "Marvel/Input/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: {
      action: "onChange",
    },
  },
} satisfies Meta<InputProps>;

export default meta;
type Story = StoryObj<InputProps>;

export const Username: Story = {
  args: {
    placeholder: "Usuário",
    disabled: false,
    type: "text",
    onClick: fn(),
    onChange: fn(),
    value: "",
    id: "username",
    isError: false,
    errorData: {
      error: "",
      message: "",
    },
  },
};

export const UsernameError: Story = {
  args: {
    placeholder: "Usuário",
    disabled: false,
    type: "text",
    value: "Fabio Codo",
    id: "username",
    isError: true,
    errorData: {
      error: "username",
      message: "Usuário existente!",
    },
  },
};

export const Password: Story = {
  args: {
    placeholder: "Senha",
    disabled: false,
    type: "password",
    onClick: fn(),
    onChange: fn(),
    value: "123456",
    id: "password",
    isError: false,
    errorData: {
      error: "",
      message: "",
    },
  },
};

export const PasswordError: Story = {
  args: {
    placeholder: "Senha",
    disabled: false,
    type: "password",
    value: "1234",
    id: "password",
    isError: true,
    errorData: {
      error: "password",
      message: "A senha precisa conter no mínimo 6 caracteres!",
    },
  },
};
