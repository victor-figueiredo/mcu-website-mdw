/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import CardDetail from "./index";
import { CardDetailPositions } from "../../types";
import { AppContextProvider } from "../../context/AppContext";

const meta = {
  title: "Marvel/DetailCard/Movie",
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
  decorators: [
    (Story) => {
      return <AppContextProvider>{Story()}</AppContextProvider>;
    },
  ],
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

const movie = {
  id: "315635",
  title: "Homem-Aranha: De Volta ao Lar",
  overview:
    "Depois de atuar ao lado dos Vingadores, chegou a hora do pequeno Peter Parker (Tom Holland) voltar para casa e para a sua vida, já não mais tão normal. Lutando diariamente contra pequenos crimes nas redondezas, ele pensa ter encontrado a missão de sua vida quando o terrível vilão Abutre (Michael Keaton) surge amedrontando a cidade.",
  vote_average: 7.3,
  poster_path: "/1nkwRL17cAGO8A1yu3miRBdvOsl.jpg",
  flatrate: [
    {
      logo_path: "/9ghgSC0MA082EL6HLCW3GalykFD.jpg",
      provider_id: 2,
      provider_name: "Apple TV",
      display_priority: 10,
    },
    {
      logo_path: "/seGSXajazLMCKGB5hnRCidtjay1.jpg",
      provider_id: 10,
      provider_name: "Amazon Video",
      display_priority: 16,
    },
    {
      logo_path: "/8z7rC8uIDaTM91X0ZfkRf04ydj2.jpg",
      provider_id: 3,
      provider_name: "Google Play Movies",
      display_priority: 17,
    },
  ],
};

export const Movie: Story = {
  args: {
    type: "movie",
    position: { x: 300, y: 150 },
    details: {
      data: movie,
      direction: "left",
    },
    onClose: fn(),
  },
};
