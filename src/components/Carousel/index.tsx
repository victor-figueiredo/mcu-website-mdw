import { useAppContext } from "../../context/AppContext";
import CharactersCarousel from "./characters";
import HqsCarousel from "./hqs";
import MoviesCarousel from "./movies";

const Carousel = () => {
  const { viewer } = useAppContext();

  const renderCarousel = () => {
    switch (viewer) {
      case "characters":
        return <CharactersCarousel />;
      case "movies":
        return <MoviesCarousel />;
      case "hqs":
        return <HqsCarousel />;
      default:
        return null;
    }
  };

  return <>{renderCarousel()}</>;
};

export default Carousel;
