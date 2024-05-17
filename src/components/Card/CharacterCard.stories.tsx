import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import CharacterCard from "./character";
import { CharacterCardProps } from "../../types";

const meta = {
  title: "Marvel/Card/Character",
  component: CharacterCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<CharacterCardProps>;

export default meta;
type Story = StoryObj<CharacterCardProps>;

export const Character: Story = {
  args: {
    character: {
      name: "Nome do personagem",
      description: "Descrição do personagem",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/0/03/523219b086a17",
        extension: "jpg",
      },
    },
  },
};
