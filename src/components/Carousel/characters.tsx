/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from "../Slider";
import { SwiperSlide } from "swiper/react";
import CharacterCard from "../Card/character";
import { useAppContext } from "../../context/AppContext";
import { CardSkeleton } from "../Card/skeleton";
import { SearchInput } from "../Input";
import { Button, CleanFilterButton } from "../Button";
import { useEffect, useState } from "react";
import CardDetail from "../DetailCard";
import { useMediaQuery } from "react-responsive";
import { FiltersContainer, InputForm, FormCleaner } from "./style";
import { CardDetailPositions, Character, CharacterDetails } from "../../types";

type Details = {
  data: Character | null;
  direction: string | null;
};

const CharactersCarousel = () => {
  const [details, setDetails] = useState<Details>({
    data: null,
    direction: null,
  });
  const [show, setShow] = useState<boolean>(false);
  const [position, setPosition] = useState<CardDetailPositions>({ x: 0, y: 0 });
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const {
    search,
    characters,
    isLoading,
    fetchCharacters,
    handleClearSearches,
    fetchCharactersByName,
    fetchMoreCharacters,
  } = useAppContext();

  const isTabletOrMobile = useMediaQuery({
    query: "(min-width: 760px) and (max-width: 1140px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 759px)" });

  useEffect(() => {
    fetchCharacters({ offset: 0 });
  }, []);

  const handleOpenDetailsCard = (
    e: React.MouseEvent<HTMLDivElement>,
    realIndex: number,
    currentIndex: number,
    character: Character
  ) => {
    const indexInView = realIndex - currentIndex;
    const cardRect = (e.target as HTMLDivElement).getBoundingClientRect();
    if (isMobile) {
      setPosition({ x: cardRect.left - 395, y: cardRect.top });
      setDetails({ data: character, direction: "centered" });
      setShow(true);
      return;
    }
    const third = isTabletOrMobile ? indexInView === 1 : indexInView === 2;
    if (third) {
      const space = cardRect.left - 395;
      setPosition({ x: space, y: cardRect.top });
      setDetails({ data: character, direction: "right" });
      setShow(true);
      return;
    }
    const space = cardRect.right - 289;
    setPosition({ x: space, y: cardRect.top });
    setDetails({ data: character, direction: "left" });
    setShow(true);
  };

  const handleSearchByName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const search = (e.currentTarget.elements[0] as HTMLInputElement).value;
    fetchCharactersByName(search);
  };

  const handleGetToNextPage = (swiper: { isEnd: boolean }) => {
    if (swiper.isEnd) {
      const lastPage = characters.count < characters.limit;
      if (lastPage) return;
      fetchMoreCharacters();
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
        </InputForm>
        {search && (
          <FormCleaner className="clean-form" onSubmit={handleClear}>
            <CleanFilterButton type="submit" buttonType="filter" />
            <Button label="Limpar filtros" buttonType="filter" />
          </FormCleaner>
        )}
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
            {characters?.results.map((character: Character, index: number) => (
              <SwiperSlide key={character.id}>
                <CharacterCard
                  character={character}
                  onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.stopPropagation();
                    handleOpenDetailsCard(e, index, currentIndex, character);
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
            type="character"
            position={position}
            details={details as CharacterDetails}
            onClose={handleClose}
          />
        </>
      )}
    </>
  );
};

export default CharactersCarousel;
