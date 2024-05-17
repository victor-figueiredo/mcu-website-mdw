import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import HQCard from "./hq";
import { HQCardProps } from "../../types";

const meta = {
  title: "Marvel/Card/HQ",
  component: HQCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  tags: ["autodocs"],
  args: {
    hq: {
      title: "Título do HQ",
      description: "Descrição do HQ",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/9/20/4bc665483c3aa",
        extension: "jpg",
      },
      textObjects: [
        {
          text: "Texto do HQ",
        },
      ],
    },
    onClick: fn(),
  },
} satisfies Meta<HQCardProps>;

export default meta;
type Story = StoryObj<HQCardProps>;

export const HQ: Story = {};
