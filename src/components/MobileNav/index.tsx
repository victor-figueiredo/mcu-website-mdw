import { MobileNavButton } from "./style";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { default as Mobile } from "./mobilenav";

const MobileNav = () => {
  const { viewer, handleChangeViewer } = useAppContext();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <MobileNavButton onClick={handleOpen}>
        <TiThMenu size={30} color="#FF0000" />
      </MobileNavButton>
      <Mobile
        open={open}
        viewer={viewer}
        changeViewer={handleChangeViewer}
        handleClose={handleClose}
      />
    </>
  );
};

export default MobileNav;
