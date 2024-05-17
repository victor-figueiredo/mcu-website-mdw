import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import MovieCard from "./movie";
import { MovieCardProps } from "../../types";

const meta = {
  title: "Marvel/Card/Movie",
  component: MovieCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    movie: {
      title: "Título do filme",
      overview: "Sinapse do filme",
      poster_path:
        "https://image.tmdb.org/t/p/w500/8chwENebfUEJzZ7sMUA0nOgiCKk.jpg",
    },
    onClick: fn(),
  },
} satisfies Meta<MovieCardProps>;

export default meta;
type Story = StoryObj<MovieCardProps>;

export const Movie: Story = {};
