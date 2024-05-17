import type { Meta, StoryObj } from "@storybook/react";
import {
  AppContext,
  AppContextProvider,
  MyContextValue,
} from "../../context/AppContext";
import Carousel from "./index";

const meta = {
  title: "Marvel/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<MyContextValue>;

export default meta;

type Story = StoryObj<MyContextValue>;

export const Character: Story = {
  decorators: [
    (Story) => (
      <AppContext.Provider value={{ viewer: "characters" } as MyContextValue}>
        <AppContextProvider>
          <div style={{ width: "90vw" }}>{Story()}</div>
        </AppContextProvider>
      </AppContext.Provider>
    ),
  ],
};
