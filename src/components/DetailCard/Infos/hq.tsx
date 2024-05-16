import { useEffect, useState } from "react";
import { Description, EmptyDescription, Title } from "./style";
import { translateText } from "../../../api/api";

/* eslint-disable @typescript-eslint/no-explicit-any */
const HQInfos = ({ details }: any) => {
  const [isLoadingTranslate, setIsLoadingTranslate] = useState<boolean>(true);
  const [description, setDescription] = useState<string>("");
  const hqDescription = details.data.description;
  const hqInfo = details.data.textObjects;

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

  return (
    <>
      <Title>{details.data?.title}</Title>
      {!isLoadingTranslate && (hqDescription || hqInfo?.length > 0) && (
        <Description>{description}</Description>
      )}
      {!isLoadingTranslate && !description && (
        <EmptyDescription>
          A descrição deste quadrinho não está presente nos dados da API da
          Marvel.
        </EmptyDescription>
      )}
    </>
  );
};

export default HQInfos;
