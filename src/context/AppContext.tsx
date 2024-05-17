/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useState } from "react";
import * as Api from "../api/api";
import { clearSearchInput } from "../utils";

export interface MyContextValue {
  isLoading: boolean;
  isLoadingMoreData: boolean;
  characters: any;
  comics: any;
  movies: any;
  fetchCharacters: ({ offset }: { offset: number }) => void;
  fetchMovies: () => void;
  fetchComics: ({ offset }: { offset: number }) => void;
  fetchCharactersByName: (search: string) => void;
  fetchMoreCharacters: () => void;
  fetchMoreComics: () => void;
  fetchComicsByTitle: (search: string) => void;
  fetchMoreMovies: ({ page }: { page: string }) => void;
  fetchMoreMoviesWithTitle: ({
    title,
    page,
  }: {
    title: string;
    page: string;
  }) => void;
  fetchMoviesByTitle: ({
    title,
    page,
    nextPage,
  }: {
    title: string;
    page: string;
    nextPage?: boolean;
  }) => void;
  fetchMoviesSorted: (sortBy: { value: string; label: string }) => void;
  fetchMoreMoviesSorted: () => void;
  fetchMovieWatchProvider: (movieId: string) => void;
  selectedOption: string;
  viewer: string;
  setMovies: (value: any) => void;
  search: string;
  handleClearSearches: () => void;
  handleChangeViewer: (value: string) => void;
}

export const AppContext = createContext<MyContextValue | undefined>(undefined);

export const useAppContext = (): MyContextValue => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadingMoreData, setIsLoadingMoreData] = useState<boolean>(false);
  const [viewer, setViewer] = useState<string>("characters");
  const [characters, setCharacters] = useState<any>(null);
  const [comics, setComics] = useState<any>(null);
  const [movies, setMovies] = useState<any>(null);
  const [search, setSearch] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState("none");

  const fetchCharacters = async ({ offset }: { offset: number }) => {
    setIsLoading(true);
    const {
      data: { data },
    } = await Api.getCharacters({ offset });
    setCharacters(data);
    setIsLoading(false);
  };

  const fetchComics = async ({ offset }: { offset: number }) => {
    setIsLoading(true);
    const {
      data: { data },
    } = await Api.getComics({ offset });
    setComics(data);
    setIsLoading(false);
  };

  const fetchMovies = async () => {
    setIsLoading(true);
    const { data } = await Api.getMovies({ page: "1" });
    setMovies(data);
    setIsLoading(false);
  };

  const fetchMoreMovies = async ({ page }: { page: string }) => {
    setIsLoadingMoreData(true);
    const { data } = await Api.getMovies({ page });
    setMovies((prevState: any) => {
      return {
        ...prevState,
        ...data,
        results: [...prevState.results, ...data.results],
      };
    });
    setIsLoadingMoreData(false);
  };

  const fetchMoviesByTitle = async ({ title }: { title: string }) => {
    setSearch(title);
    setIsLoading(true);
    const { data } = await Api.getMovieByTitle({ title });
    setMovies(data);
    setIsLoading(false);
  };

  const fetchMoreMoviesWithTitle = async ({
    title,
    page,
  }: {
    title: string;
    page: string;
  }) => {
    setIsLoadingMoreData(true);
    setSearch(title);
    const { data } = await Api.getMovieByTitle({ title, page });

    setMovies((prevState: any) => {
      return {
        ...prevState,
        ...data,
        results: [...prevState.results, ...data.results],
      };
    });
    setIsLoadingMoreData(false);
  };

  const fetchMoviesSorted = async (sortBy: {
    value: string;
    label: string;
  }) => {
    setIsLoading(true);
    setSelectedOption(sortBy.value);
    const { data } = await Api.getMovies({ sortBy: sortBy.value, page: "1" });
    setMovies(data);
    setIsLoading(false);
  };

  const fetchMoreMoviesSorted = async () => {
    setIsLoadingMoreData(true);
    const page = movies.page + 1;
    const { data } = await Api.getMovies({ sortBy: selectedOption, page });
    setMovies((prevState: any) => {
      return {
        ...prevState,
        ...data,
        results: [...prevState.results, ...data.results],
      };
    });
    setIsLoading(false);
    setIsLoadingMoreData(false);
  };

  const fetchMoreCharacters = async () => {
    setIsLoadingMoreData(true);
    const offset = characters.offset + characters.limit;
    const {
      data: { data },
    } = await Api.getCharacters({ name: search, offset });
    setCharacters((prevState: any) => ({
      ...prevState,
      offset: data.offset,
      count: data.count,
      limit: data.limit,
      results: [...prevState.results, ...data.results],
    }));
    setIsLoadingMoreData(false);
  };

  const fetchCharactersByName = async (search: string) => {
    setIsLoading(true);
    const {
      data: { data },
    } = await Api.getCharacters({ name: search, offset: 0 });
    setSearch(search);
    setCharacters(data);
    setIsLoading(false);
  };

  const fetchMoreComics = async () => {
    setIsLoadingMoreData(true);
    const offset = comics.offset + comics.limit;
    const {
      data: { data },
    } = await Api.getComics({ title: search, offset });
    setComics((prevState: any) => ({
      ...prevState,
      offset: data.offset,
      count: data.count,
      limit: data.limit,
      results: [...prevState.results, ...data.results],
    }));
    setIsLoadingMoreData(false);
  };

  const fetchComicsByTitle = async (search: string) => {
    setIsLoading(true);
    const {
      data: { data },
    } = await Api.getComics({ title: search, offset: 0 });
    setSearch(search);
    setComics(data);
    setIsLoading(false);
  };

  const fetchMovieWatchProvider = async (movieId: string) => {
    const {
      data: {
        results: {
          BR: { flatrate },
        },
      },
    } = await Api.getMovieWatchProvider({ movieId });

    setMovies((prevState: any) => {
      const updatedResults = prevState.results.map((movie: any) => {
        if (movie.id === movieId) {
          return {
            ...movie,
            flatrate,
          };
        }
        return movie;
      });

      return {
        ...prevState,
        results: updatedResults,
      };
    });
    return flatrate;
  };

  const handleChangeViewer = (value: string) => {
    setViewer(value);
    setSearch("");
    if (value === "movies") setSelectedOption("none");
  };

  const handleClearSearches = () => {
    setIsLoading(true);
    setSearch("");
    setSelectedOption("none");
    clearSearchInput("input-search");
    if (viewer === "characters") fetchCharacters({ offset: 0 });
    if (viewer === "movies") fetchMovies();
    if (viewer === "hqs") fetchComics({ offset: 0 });
  };

  const contextValue: MyContextValue = {
    isLoading,
    isLoadingMoreData,
    characters,
    comics,
    movies,
    fetchCharacters,
    fetchMovies,
    fetchComics,
    fetchMoreCharacters,
    fetchCharactersByName,
    fetchMoreComics,
    fetchComicsByTitle,
    fetchMoreMovies,
    fetchMoviesByTitle,
    fetchMoreMoviesWithTitle,
    fetchMoviesSorted,
    fetchMoreMoviesSorted,
    fetchMovieWatchProvider,
    selectedOption,
    viewer,
    handleChangeViewer,
    setMovies,
    search,
    handleClearSearches,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
