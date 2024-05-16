/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Button } from "../Button";
import { CardContainer, Description, DetailsContainer } from "./style";
import { translateText } from "../../api/api";
import { HQCardProps } from "../../types";

const HqCard = ({ hq, onClick }: HQCardProps) => {
  const [isLoadingTranslate, setIsLoadingTranslate] = useState<boolean>(true);
  const [description, setDescription] = useState<string>("");

  const hqDescription = hq.description;
  const hqTitle =
    hq.title.length > 30 ? `${hq.title.substr(0, 30)}...` : hq.title;
  const hqInfo = hq.textObjects;

  useEffect(() => {
    if (hqDescription !== "") {
      handleTranslate(hqDescription);
      return;
    }
    if (hqInfo?.length > 0 && hqInfo[0].text) {
      handleTranslate(hqInfo[0].text);
      return;
    }
    setIsLoadingTranslate(false);
  }, []);

  const handleTranslate = async (text: string) => {
    const descriptionTranslated = await translateText(text);
    setDescription(
      descriptionTranslated.data.data.translations[0].translatedText
    );
    setIsLoadingTranslate(false);
  };

  const imageUrl = `${hq.thumbnail.path}.${hq.thumbnail.extension}`;
  return (
    <CardContainer imageUrl={imageUrl} onClick={onClick}>
      <DetailsContainer>
        {hqTitle && <h1>{hqTitle}</h1>}
        {!isLoadingTranslate && (hqDescription || hqInfo?.length > 0) && (
          <Description>
            {isLoadingTranslate ? "Carregando..." : description}
          </Description>
        )}
        <Button label="Ver detalhes" buttonType="default" />
      </DetailsContainer>
    </CardContainer>
  );
};

export default HqCard;
