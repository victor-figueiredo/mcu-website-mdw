/* eslint-disable @typescript-eslint/no-explicit-any */
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { SwiperStyled } from "./style";
import { useAppContext } from "../../context/AppContext";
import { useMediaQuery } from "react-responsive";
import { SliderProps } from "../../types";
import { setSlidePerView } from "../../utils";

const Slider: React.FC<SliderProps> = (props) => {
  const { isLoadingMoreData } = useAppContext();

  const mediaQueries = {
    isDesktopxl: useMediaQuery({
      query: "(min-width: 1800px)",
    }),
    isDesktop: useMediaQuery({
      query: "(min-width: 1400px) and (max-width: 1799px)",
    }),
    isTabletOrMobile: useMediaQuery({
      query: "(min-width: 760px) and (max-width: 1140px)",
    }),
    isMobile: useMediaQuery({ query: "(max-width: 759px)" }),
  };

  const slidesQtyPerView = setSlidePerView(mediaQueries);

  return (
    <SwiperStyled
      slidesPerView={slidesQtyPerView}
      navigation
      modules={[Navigation]}
      className="mySwiper"
      onSlideChange={props.onSlideChange}
      isLoadingMoreData={isLoadingMoreData}
    >
      {props.children}
    </SwiperStyled>
  );
};

export default Slider;
