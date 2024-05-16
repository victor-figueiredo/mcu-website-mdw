/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { translateText } from "../../api/api";
import { Button } from "../Button";
import { CardContainer, Description, DetailsContainer } from "./style";
import { CharacterCardProps } from "../../types";

const CharacterCard = ({ character, onClick }: CharacterCardProps) => {
  const [isLoadingTranslate, setIsLoadingTranslate] = useState<boolean>(true);
  const [description, setDescription] = useState<string>("");

  const characterTitle = character.name;

  useEffect(() => {
    if (character.description !== "") handleTranslate();
    else setIsLoadingTranslate(false);
  }, []);

  const handleTranslate = async () => {
    const descriptionTranslated = await translateText(character.description);
    setDescription(
      descriptionTranslated.data.data.translations[0].translatedText
    );
    setIsLoadingTranslate(false);
  };

  const imageUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`;
  return (
    <CardContainer imageUrl={imageUrl} onClick={onClick}>
      <DetailsContainer>
        <h1>{characterTitle}</h1>
        {!isLoadingTranslate && character.description && (
          <Description>{description}</Description>
        )}
        <Button label="Ver detalhes" buttonType="default" />
      </DetailsContainer>
    </CardContainer>
  );
};

export default CharacterCard;
