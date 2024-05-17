import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import GlobalStyles from "../src/assets/styles/global";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../src/assets/styles/themes/default";
import { themes } from "@storybook/theming";

const preview: Preview = {
  decorators: [
    withThemeFromJSXProvider({
      Provider: ThemeProvider,
      GlobalStyles,
      themes: {
        dark: defaultTheme,
      },
      defaultTheme: "dark",
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
  },
};

export default preview;
