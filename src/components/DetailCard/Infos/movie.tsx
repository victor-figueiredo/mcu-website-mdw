// import { useState } from "react";
import {
  ContainerMovieDescription,
  Description,
  InfoTitle,
  WatchProvidersContainer,
  Title,
  WatchProvider,
} from "./style";
import StarRating from "../../Ratings";
import { useEffect, useState } from "react";
import { useAppContext } from "../../../context/AppContext";
import * as Api from "../../../api/api";
import { useMediaQuery } from "react-responsive";

/* eslint-disable @typescript-eslint/no-explicit-any */
const MovieInfos = ({ details }: any) => {
  const [listWatchProviders, setListWatchProviders] = useState<any>([]);
  const [loadingWatchProviders, setLoadingWatchProviders] =
    useState<boolean>(true);
  const { setMovies } = useAppContext();
  const rating = parseInt(details.data?.vote_average) / 2;
  const hasProviders =
    details.data?.flatrate && details.data?.flatrate.length > 0;
  const isMobile = useMediaQuery({
    query: "(max-width: 760px)",
  });
  const descriptionCharacterQty = isMobile ? 350 : 430;

  useEffect(() => {
    if (!hasProviders) {
      fetchMovieWatchProvider(details.data?.id);
      return;
    }
    setLoadingWatchProviders(false);
    setListWatchProviders(details.data?.flatrate);
  }, []);

  const fetchMovieWatchProvider = async (movieId: string) => {
    const {
      data: {
        results: {
          BR: { flatrate },
        },
      },
    } = await Api.getMovieWatchProvider({ movieId });
    setListWatchProviders(flatrate);
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
    setLoadingWatchProviders(false);
  };

  return (
    <>
      <Title>{details.data?.title}</Title>
      <ContainerMovieDescription
        activeScroll={details.data.overview?.length > descriptionCharacterQty}
      >
        <Description>{details.data?.overview}</Description>
      </ContainerMovieDescription>
      {!loadingWatchProviders && listWatchProviders?.length > 0 && (
        <>
          <InfoTitle>Disponível em streaming</InfoTitle>
          <WatchProvidersContainer>
            {listWatchProviders?.map((provider: any, index: number) => (
              <WatchProvider
                logo={provider.logo_path}
                key={index}
                title={provider.provider_name}
              />
            ))}
          </WatchProvidersContainer>
        </>
      )}
      <InfoTitle>Crítica</InfoTitle>
      <StarRating rating={rating} />
      {/* <AppearanceList showMore={showMore}>{renderAppearances()}</AppearanceList> */}
    </>
  );
};

export default MovieInfos;
