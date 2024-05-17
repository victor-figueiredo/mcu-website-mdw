/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from "@storybook/react";
// import { AppContextProvider } from "../../context/AppContext";
import { fn } from "@storybook/test";
import CardDetail from "./index";
import { CardDetailPositions } from "../../types";
// import { AuthContext, AuthContextType } from "../../context/AuthContext";

const meta = {
  title: "Marvel/DetailCard/HQ",
  component: CardDetail,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    details: {
      direction: {
        control: {
          type: "select",
          options: ["left", "right"],
        },
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<{
  type: string;
  position: CardDetailPositions;
  details: {
    data: any;
    direction: string;
  };
  onClose: () => void;
}>;

const hq = {
  title: "Título do HQ",
  description:
    "BLOOD AND BONE starts here! The monster called MORBIUS may have survived the harrowing events of the past few months, but whether any shred of his humanity did is another question entirely. In denial about his condition and desperate for a cure, the Living Vampire’s work continues, but after a violent showdown with The Amazing Spider-Man, the heroes of the Marvel Universe may not give him as wide a berth as he’d like...",
  thumbnail: {
    path: "http://i.annihil.us/u/prod/marvel/i/mg/9/20/4bc665483c3aa",
    extension: "jpg",
  },
  textObjects: [
    {
      text: "Texto do HQ",
    },
  ],
};

export const HQ: Story = {
  args: {
    type: "hq",
    position: { x: 300, y: 150 },
    details: {
      data: hq,
      direction: "left",
    },
    onClose: fn(),
  },
};
