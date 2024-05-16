import { AxiosResponse } from "axios";
import { MARVELHttpClient, TMDBHttpClient, GCHttpClient } from "./httpClient";

type CharactersParams = {
  name?: string;
  offset?: number;
};

type ComicsParams = {
  title?: string;
  offset?: number;
};

type MoviesParams = {
  title?: string;
  page?: string;
  sortBy?: string;
};

const ts = "1715281282";
const apiKey = import.meta.env.VITE_APP_MARVEL_API_KEY;
const hash = import.meta.env.VITE_APP_MARVEL_HASH;
const GC_API_KEY = import.meta.env.VITE_APP_GC_API_KEY;

export const getCharacters = async ({
  name,
  offset,
}: CharactersParams): Promise<AxiosResponse> => {
  return await MARVELHttpClient.get(
    `/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}`,
    {
      params: {
        nameStartsWith: name || null,
        offset: offset?.toString(),
        limit: "6",
      },
    }
  );
};

export const getComics = async ({
  title,
  offset,
}: ComicsParams): Promise<AxiosResponse> => {
  return await MARVELHttpClient.get(
    `/comics?ts=${ts}&apikey=${apiKey}&hash=${hash}`,
    {
      params: {
        titleStartsWith: title || null,
        offset: offset?.toString(),
        limit: "6",
      },
    }
  );
};

export const getMovies = async ({
  sortBy,
  page,
}: MoviesParams): Promise<AxiosResponse> => {
  return await TMDBHttpClient.get(
    `/discover/movie?with_companies=420&language=pt-BR`,
    { params: { sort_by: sortBy || null, page } }
  );
};

export const getMovieByTitle = async ({
  title,
  page,
}: MoviesParams): Promise<AxiosResponse> => {
  return await TMDBHttpClient.get(`/search/movie`, {
    params: {
      query: title || null,
      page: page?.toString(),
      language: "pt-BR",
      with_companies: 420,
    },
  });
};

export const getMovieWatchProvider = async ({
  movieId,
}: {
  movieId: string;
}) => {
  return await TMDBHttpClient.get(`/movie/${movieId}/watch/providers`, {
    params: { region: "BR" },
  });
};

export const translateText = async (
  text: string,
  targetLanguage: string = "pt"
) =>
  await GCHttpClient.post(`?key=${GC_API_KEY}`, {
    q: text,
    target: targetLanguage,
  });
