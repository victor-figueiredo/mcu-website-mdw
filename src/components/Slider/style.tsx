import styled from "styled-components";
import { Swiper } from "swiper/react";
import NextButton from "./next.svg";
import Loader from "./loader.svg";
import PrevButton from "./prev.svg";

export const SwiperStyled = styled(Swiper)<{ isLoadingMoreData: boolean }>`
  &.swiper {
    margin: 20px 60px 20px 60px;
    position: relative;
    z-index: 3;

    @media (max-width: 1310px) {
      margin: 20px;
    }

    @media (max-width: 880px) {
      margin: 40px;
    }

    @media (min-width: 760px) and (max-width: 880px) {
      margin: 40px 20px;
    }

    @media (min-width: 411px) and (max-width: 500px) {
      margin: 20px 10px;
    }
    @media (max-width: 411px) {
      margin: 20px 0px;
    }
  }

  .swiper-slide {
    /* width: 289px; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-next {
    ${(props) =>
      props.isLoadingMoreData
        ? `
          background-image: url(${Loader}) !important;
          &.swiper-button-disabled {
            opacity: 1;
          }
          `
        : `background-image: url(${NextButton}) !important;
          `}
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    &::after {
      display: none;
    }
  }

  .swiper-button-prev {
    background-image: url(${PrevButton}) !important;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    &::after {
      display: none;
    }
  }
`;
