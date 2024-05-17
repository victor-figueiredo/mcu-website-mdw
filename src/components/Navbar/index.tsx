import Logo from "../../components/Logo";
import { useAppContext } from "../../context/AppContext";
import NavbarOptions from "./navbar";

const Navbar = () => {
  const { viewer, handleChangeViewer } = useAppContext();

  return (
    <>
      <Logo small />
      <NavbarOptions viewer={viewer} changeViewer={handleChangeViewer} />
    </>
  );
};

export default Navbar;
