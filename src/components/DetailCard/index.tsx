/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardContainer } from "../Card/style";
import CharacterInfos from "./Infos/character";
import { IoIosCloseCircleOutline } from "react-icons/io";
import {
  CardDetailContainer,
  CloseButton,
  DetailCardContainer,
  Overlay,
} from "./style";
import MovieInfos from "./Infos/movie";
import HQInfos from "./Infos/hq";
import { CardDetailProps, Character, Comic, Movie } from "../../types";

const CardDetail = ({ position, details, onClose, type }: CardDetailProps) => {
  const isMobile = details.direction === "centered";
  const imageUrl =
    type === "movie"
      ? `https://image.tmdb.org/t/p/w500${(details.data as Movie)?.poster_path}`
      : `${(details.data as Character | Comic)?.thumbnail.path}.${(details.data as Character | Comic)?.thumbnail.extension}`;

  function renderDetails(type: string, details: any) {
    switch (type) {
      case "character":
        return <CharacterInfos details={details} />;
      case "movie":
        return <MovieInfos details={details} />;
      case "hq":
        return <HQInfos details={details} />;
    }
  }

  return (
    <>
      <Overlay onClick={onClose} />
      <CardDetailContainer
        isMobile={isMobile}
        details={details}
        position={position}
      >
        <CardContainer isModal imageUrl={imageUrl} />
        <DetailCardContainer>
          {renderDetails(type, details)}
          <CloseButton position={details.direction} onClick={onClose}>
            <IoIosCloseCircleOutline />
          </CloseButton>
        </DetailCardContainer>
      </CardDetailContainer>
    </>
  );
};

export default CardDetail;
