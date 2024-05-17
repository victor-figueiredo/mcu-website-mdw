import type { Meta, StoryObj } from "@storybook/react";

import { default as HomePage } from "./index";
import { AppContextProvider } from "../../context/AppContext";

const meta = {
  title: "Marvel/Page/Home",
  component: HomePage,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      return (
        <AppContextProvider>
          <div style={{ width: "1366px" }}>{Story()}</div>
        </AppContextProvider>
      );
    },
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {};
