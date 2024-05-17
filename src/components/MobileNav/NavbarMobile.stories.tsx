import type { Meta, StoryObj } from "@storybook/react";
import MobileNav from "./mobilenav";
import { AppContextProvider } from "../../context/AppContext";
import { NavbarContainer } from "../../pages/Home/style";
import { fn } from "@storybook/test";
import { AuthContext, AuthContextType } from "../../context/AuthContext";

const userProfile = {
  username: "Victor Figueiredo",
  password: "123456",
  profileImage: "",
  keepLogin: false,
};

const meta = {
  title: "Marvel/Navbar/Mobile",
  component: MobileNav,
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
            <div style={{ width: "400px", height: "600px" }}>
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

export const Mobile: Story = {
  args: {
    open: true,
    viewer: "characters",
    changeViewer: fn(),
    handleClose: fn(),
  },
};
