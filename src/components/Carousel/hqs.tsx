/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from "../Slider";
import { SwiperSlide } from "swiper/react";
import { useAppContext } from "../../context/AppContext";
import { CardSkeleton } from "../Card/skeleton";
import HqCard from "../Card/hq";
import { SearchInput } from "../Input";
import { Button, CleanFilterButton } from "../Button";
import { useEffect, useState } from "react";
import CardDetail from "../DetailCard";
import { useMediaQuery } from "react-responsive";
import { FiltersContainer, FormCleaner, InputForm } from "./style";
import { CardDetailPositions, Comic, ComicDetails } from "../../types";

type Details = {
  data: Comic | null;
  direction: string | null;
};

const HqsCarousel = () => {
  const [details, setDetails] = useState<Details>({
    data: null,
    direction: null,
  });
  const [show, setShow] = useState<boolean>(false);
  const [position, setPosition] = useState<CardDetailPositions>({ x: 0, y: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const {
    search,
    comics,
    isLoading,
    fetchComics,
    fetchMoreComics,
    fetchComicsByTitle,
    handleClearSearches,
  } = useAppContext();

  const isTabletOrMobile = useMediaQuery({
    query: "(min-width: 760px) and (max-width: 1140px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 759px)" });

  useEffect(() => {
    fetchComics({ offset: 0 });
  }, []);

  const handleOpenDetailsCard = (
    e: React.MouseEvent<HTMLDivElement>,
    realIndex: number,
    currentIndex: number,
    hq: Comic
  ) => {
    const indexInView = realIndex - currentIndex;
    const cardRect = (e.target as HTMLDivElement).getBoundingClientRect();
    if (isMobile) {
      setPosition({ x: cardRect.left - 395, y: cardRect.top });
      setDetails({ data: hq, direction: "centered" });
      setShow(true);
      return;
    }
    const third = isTabletOrMobile ? indexInView === 1 : indexInView === 2;
    if (third) {
      const space = cardRect.left - 395;
      setPosition({ x: space, y: cardRect.top });
      setDetails({ data: hq, direction: "right" });
      setShow(true);
      return;
    }
    const space = cardRect.right - 289;
    setPosition({ x: space, y: cardRect.top });
    setDetails({ data: hq, direction: "left" });
    setShow(true);
  };

  const handleSearchByName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const search = (e.currentTarget.elements[0] as HTMLInputElement).value;
    fetchComicsByTitle(search);
  };

  const handleGetToNextPage = (swiper: { isEnd: boolean }) => {
    if (swiper.isEnd) {
      const lastPage = comics.count < comics.limit;
      if (lastPage) return;
      fetchMoreComics();
    }
  };

  const handleClear = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleClearSearches();
  };

  const handleClose = () => {
    setShow(false);
    setDetails({ data: null, direction: null });
  };

  return (
    <>
      <FiltersContainer>
        <InputForm onSubmit={handleSearchByName}>
          <SearchInput id="input-search" placeholder="Buscar pelo nome" />
          {search && (
            <FormCleaner onSubmit={handleClear}>
              <CleanFilterButton type="submit" buttonType="filter" />
              <Button
                type="submit"
                label="Limpar filtros"
                buttonType="filter"
              />
            </FormCleaner>
          )}
        </InputForm>
      </FiltersContainer>
      <Slider
        onSlideChange={(swiper) => {
          handleGetToNextPage(swiper);
          setCurrentIndex(swiper.activeIndex);
        }}
      >
        {isLoading ? (
          <>
            <SwiperSlide>
              <CardSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <CardSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <CardSkeleton />
            </SwiperSlide>
          </>
        ) : (
          <>
            {comics?.results.map((hq: Comic, index: number) => (
              <SwiperSlide key={hq.id}>
                <HqCard
                  hq={hq}
                  onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.stopPropagation();
                    handleOpenDetailsCard(e, index, currentIndex, hq);
                  }}
                />
              </SwiperSlide>
            ))}
          </>
        )}
      </Slider>
      {show && details.data && (
        <>
          <CardDetail
            type="hq"
            position={position}
            details={details as ComicDetails}
            onClose={handleClose}
          />
        </>
      )}
    </>
  );
};

export default HqsCarousel;
