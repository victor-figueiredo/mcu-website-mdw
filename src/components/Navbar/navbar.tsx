import { OptionsContainer, Option } from "./style";
import Profile from "../Profile";

const NavbarOptions = ({
  viewer,
  changeViewer,
}: {
  viewer: string;
  changeViewer: (viewer: string) => void;
}) => {
  return (
    <OptionsContainer>
      <Option
        selected={viewer === "characters"}
        onClick={() => changeViewer("characters")}
      >
        Personagens
      </Option>
      <Option
        selected={viewer === "movies"}
        onClick={() => changeViewer("movies")}
      >
        Filmes
      </Option>
      <Option selected={viewer === "hqs"} onClick={() => changeViewer("hqs")}>
        HQ's
      </Option>
      <Profile />
    </OptionsContainer>
  );
};

export default NavbarOptions;
