import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./index";
import { NavbarContainer } from "../../pages/Home/style";
import { AuthContext, AuthContextType } from "../../context/AuthContext";
import { AppContextProvider } from "../../context/AppContext";

const userProfile = {
  username: "Victor Figueiredo",
  password: "123456",
  profileImage: "",
  keepLogin: false,
};

const meta = {
  title: "Marvel/Navbar/Desktop",
  component: Navbar,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <AuthContext.Provider
          value={{ userProfile: userProfile } as AuthContextType}
        >
          <AppContextProvider>
            <div style={{ width: "1366px" }}>
              <NavbarContainer>{Story()}</NavbarContainer>
            </div>
          </AppContextProvider>
        </AuthContext.Provider>
      );
    },
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {};
