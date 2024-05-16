/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from "../Slider";
import { SwiperSlide } from "swiper/react";
import { useAppContext } from "../../context/AppContext";
import { CardSkeleton } from "../Card/skeleton";
import MovieCard from "../Card/movie";
import FilterBySelect from "../Select";
import { SearchInput } from "../Input";
import { useEffect, useState } from "react";
import CardDetail from "../DetailCard";
import { useMediaQuery } from "react-responsive";
import {
  FiltersContainer,
  InputForm,
  FormCleaner,
  SelectContainer,
} from "./style";
import { Button, CleanFilterButton } from "../Button";
import { CardDetailPositions, Movie, MovieDetails } from "../../types";

type Details = {
  data: Movie | null;
  direction: string | null;
};

const MoviesCarousel = () => {
  const [details, setDetails] = useState<Details>({
    data: null,
    direction: null,
  });
  const [show, setShow] = useState<boolean>(false);
  const [position, setPosition] = useState<CardDetailPositions>({ x: 0, y: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const {
    search,
    movies,
    isLoading,
    selectedOption,
    fetchMovies,
    fetchMoreMovies,
    fetchMoviesByTitle,
    fetchMoreMoviesWithTitle,
    fetchMoviesSorted,
    fetchMoreMoviesSorted,
    handleClearSearches,
  } = useAppContext();

  const isTabletOrMobile = useMediaQuery({
    query: "(min-width: 760px) and (max-width: 1140px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 759px)" });

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleOpenDetailsCard = (
    e: React.MouseEvent<HTMLDivElement>,
    realIndex: number,
    currentIndex: number,
    movie: Movie
  ) => {
    const indexInView = realIndex - currentIndex;
    const cardRect = (e.target as HTMLDivElement).getBoundingClientRect();
    if (isMobile) {
      setPosition({ x: cardRect.left - 455, y: cardRect.top });
      setDetails({ data: movie, direction: "centered" });
      setShow(true);
      return;
    }
    const third = isTabletOrMobile ? indexInView === 1 : indexInView === 2;
    if (third) {
      const space = cardRect.left - 395;
      setPosition({ x: space, y: cardRect.top });
      setDetails({ data: movie, direction: "right" });
      setShow(true);
      return;
    }
    const space = cardRect.right - 289;
    setPosition({ x: space, y: cardRect.top });
    setDetails({ data: movie, direction: "left" });
    setShow(true);
  };

  const handleGetToNextPage = (swiper: { isEnd: boolean }) => {
    if (swiper.isEnd) {
      if (selectedOption !== "none") return fetchMoreMoviesSorted();
      const lastPage = movies.results.length < 20;
      if (lastPage) return;
      if (search) {
        return fetchMoreMoviesWithTitle({
          title: search,
          page: movies.page + 1,
        });
      }
      fetchMoreMovies({ page: movies.page + 1 });
    }
  };

  const handleSearchByName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const search = (e.currentTarget.elements[0] as HTMLInputElement).value;
    fetchMoviesByTitle({ title: search, page: "1" });
  };

  const handleClear = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleClearSearches();
  };

  const handleSelectChange = (newValue: { value: string; label: string }) => {
    if (newValue) fetchMoviesSorted(newValue);
  };

  const handleClose = () => {
    setShow(false);
    setDetails({ data: null, direction: null });
  };

  return (
    <>
      <FiltersContainer>
        <InputForm onSubmit={handleSearchByName}>
          <SearchInput
            id="input-search"
            placeholder="Buscar pelo nome"
            disabled={selectedOption !== "none"}
          />
        </InputForm>
        <SelectContainer>
          <FilterBySelect
            selectedOption={selectedOption}
            onChange={handleSelectChange}
          />
        </SelectContainer>
        {(search || selectedOption !== "none") && (
          <FormCleaner onSubmit={handleClear}>
            <CleanFilterButton type="submit" buttonType="filter" />
            <Button label="Limpar filtros" type="submit" buttonType="filter" />
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
            {movies?.results.map((movie: Movie, index: number) => (
              <SwiperSlide key={movie.id}>
                <MovieCard
                  movie={movie}
                  onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.stopPropagation();
                    handleOpenDetailsCard(e, index, currentIndex, movie);
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
            type="movie"
            position={position}
            details={details as MovieDetails}
            onClose={handleClose}
          />
        </>
      )}
    </>
  );
};

export default MoviesCarousel;
