/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import CardDetail from "./index";
import { CardDetailPositions } from "../../types";

const meta = {
  title: "Marvel/DetailCard/Character",
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

const character = {
  name: "A.I.M",
  description: "AIM is a terrorist organization bent on destroying the world.",
  comics: {
    items: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/26281",
        name: "A Beginning",
        type: "interiorStory",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/28352",
        name: "Utility of Myth",
        type: "interiorStory",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/28356",
        name: "Army Ants",
        type: "interiorStory",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/28358",
        name: "Ballroom Blitzkrieg",
        type: "interiorStory",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/28360",
        name: "Staring Contests are for Suckers",
        type: "interiorStory",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/28407",
        name: "The Draco Part One: Sins of the Father",
        type: "interiorStory",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/28411",
        name: "The Draco Part Three",
        type: "interiorStory",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/28413",
        name: "The Draco Part Four",
        type: "interiorStory",
      },
    ],
  },
  series: {
    items: [],
  },
  stories: {
    items: [],
  },
  thumbnail: {
    path: "http://i.annihil.us/u/prod/marvel/i/mg/0/03/523219b086a17",
    extension: "jpg",
  },
};

export const Character: Story = {
  args: {
    type: "character",
    position: { x: 300, y: 150 },
    details: {
      data: character,
      direction: "left",
    },
    onClose: fn(),
  },
};
