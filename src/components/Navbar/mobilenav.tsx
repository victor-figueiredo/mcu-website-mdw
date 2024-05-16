import { IoIosCloseCircleOutline } from "react-icons/io";
import Profile from "../Profile";
import {
  MobileNavbarClose,
  MobileNavBarContainer,
  MobileNavOption,
  MobileNavOptions,
} from "./style";

const MobileNav = ({
  open,
  viewer,
  changeViewer,
  handleClose,
}: {
  open: boolean;
  viewer: string;
  changeViewer: (viewer: string) => void;
  handleClose: () => void;
}) => {
  return (
    <>
      <MobileNavBarContainer open={open}>
        <MobileNavOptions>
          <MobileNavOption
            selected={viewer === "characters"}
            onClick={() => {
              changeViewer("characters");
              handleClose();
            }}
          >
            Personagens
          </MobileNavOption>
          <MobileNavOption
            selected={viewer === "movies"}
            onClick={() => {
              changeViewer("movies");
              handleClose();
            }}
          >
            Filmes
          </MobileNavOption>
          <MobileNavOption
            selected={viewer === "hqs"}
            onClick={() => {
              changeViewer("hqs");
              handleClose();
            }}
          >
            HQ's
          </MobileNavOption>
          <Profile />
          <MobileNavbarClose onClick={handleClose}>
            <IoIosCloseCircleOutline />
          </MobileNavbarClose>
        </MobileNavOptions>
      </MobileNavBarContainer>
    </>
  );
};

export default MobileNav;
