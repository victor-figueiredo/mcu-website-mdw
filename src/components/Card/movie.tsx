/* eslint-disable @typescript-eslint/no-explicit-any */
import { MovieCardProps } from "../../types";
import { Button } from "../Button";
import { CardContainer, DetailsContainer } from "./style";

const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <CardContainer imageUrl={imageUrl} onClick={onClick}>
      <DetailsContainer>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <Button label="Ver detalhes" buttonType="default" />
      </DetailsContainer>
    </CardContainer>
  );
};

export default MovieCard;
