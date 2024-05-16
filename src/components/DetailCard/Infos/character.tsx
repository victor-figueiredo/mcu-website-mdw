import { useState } from "react";
import {
  Appearance,
  AppearanceList,
  ContainerHQDescription,
  Description,
  EmptyDescription,
  InfoTitle,
  ShowMoreButton,
  Title,
} from "./style";

/* eslint-disable @typescript-eslint/no-explicit-any */
const CharacterInfos = ({ details }: any) => {
  const [showMore, setShowMore] = useState(false);

  const description = details.data?.description;

  const appearances = [
    ...(details.data?.comics.items || []),
    ...(details.data?.series.items || []),
    ...(details.data?.stories.items || []),
  ];

  const renderAppearances = () => {
    if (appearances) {
      const initialQty = description ? 3 : 5;
      return appearances.map((item: any, index: number) => {
        if (!showMore && index > initialQty) return;
        return (
          <>
            <Appearance canJumpLine={showMore}>{item.name}</Appearance>
            {!showMore &&
              index === initialQty &&
              appearances.length > initialQty && (
                <ShowMoreButton onClick={() => setShowMore(true)}>
                  Ver mais
                </ShowMoreButton>
              )}
          </>
        );
      });
    }
  };
  return (
    <>
      <Title>{details.data?.name}</Title>
      {description && (
        <ContainerHQDescription activeScroll={description.length > 230}>
          <Description>{description}</Description>
        </ContainerHQDescription>
      )}
      {appearances.length > 0 && (
        <>
          <InfoTitle>Aparições em HQ's ({appearances.length})</InfoTitle>
          <AppearanceList shorterHeight={description} showMore={showMore}>
            {renderAppearances()}
          </AppearanceList>
        </>
      )}
      {!description && appearances.length === 0 && (
        <EmptyDescription>
          A descrição e aparições deste personagem não estão presentes nos dados
          da API da Marvel.
        </EmptyDescription>
      )}
    </>
  );
};

export default CharacterInfos;
