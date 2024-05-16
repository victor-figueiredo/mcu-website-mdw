/* eslint-disable @typescript-eslint/no-explicit-any */
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { SwiperStyled } from "./style";
import { useAppContext } from "../../context/AppContext";
import { useMediaQuery } from "react-responsive";
import { SliderProps } from "../../types";

const Slider: React.FC<SliderProps> = (props) => {
  const { isLoadingMoreData } = useAppContext();
  const isTabletOrMobile = useMediaQuery({
    query: "(min-width: 760px) and (max-width: 1140px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 759px)" });
  return (
    <SwiperStyled
      slidesPerView={isMobile ? 1 : isTabletOrMobile ? 2 : 3}
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
