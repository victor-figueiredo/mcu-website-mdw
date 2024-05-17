import React from "react";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import wallpaper from "../../assets/images/wallpaper.png";
import { NavbarContainer } from "./style";
import MobileNav from "../../components/MobileNav";

const Home: React.FC = () => {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${wallpaper})`,
          backgroundSize: "cover",
          position: "absolute",
          zIndex: 1,
          opacity: 0.22, // Adjust the opacity value here
        }}
      ></div>
      <NavbarContainer>
        <Navbar />
        <MobileNav />
      </NavbarContainer>
      <Carousel />
    </>
  );
};

export default Home;
