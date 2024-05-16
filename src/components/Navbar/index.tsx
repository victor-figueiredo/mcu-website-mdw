import { MobileNavButton, NavbarContainer } from "./style";
import Logo from "../../components/Logo";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import MobileNav from "./mobilenav";
import NavbarOptions from "./navbar";

const Navbar = () => {
  const { viewer, handleChangeViewer } = useAppContext();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <NavbarContainer>
      <Logo small />
      <NavbarOptions viewer={viewer} changeViewer={handleChangeViewer} />
      <MobileNavButton onClick={handleOpen}>
        <TiThMenu size={30} color="#FF0000" />
      </MobileNavButton>
      <MobileNav
        open={open}
        viewer={viewer}
        changeViewer={handleChangeViewer}
        handleClose={handleClose}
      />
    </NavbarContainer>
  );
};

export default Navbar;
