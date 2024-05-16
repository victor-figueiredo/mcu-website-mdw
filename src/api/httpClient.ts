import axios, { AxiosInstance } from "axios";

const URLS = {
  MARVEL_URL: "http://gateway.marvel.com/v1/public",
  TMDB_URL: "https://api.themoviedb.org/3",
  GC_API_URL: "https://translation.googleapis.com/language/translate/v2",
};

const TMDB_API_KEY = import.meta.env.VITE_APP_TMDB_API_KEY;

function createHttpClient(baseURL: string): AxiosInstance {
  return axios.create({
    baseURL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

const MARVELHttpClient = createHttpClient(URLS["MARVEL_URL"]);

const TMDBHttpClient = createHttpClient(URLS["TMDB_URL"]);
TMDBHttpClient.defaults.headers.common[
  "Authorization"
] = `Bearer ${TMDB_API_KEY}`;

const GCHttpClient = createHttpClient(URLS["GC_API_URL"]);

export { MARVELHttpClient, TMDBHttpClient, GCHttpClient };
