import Skeleton from "react-loading-skeleton";
import styled, { css } from "styled-components";

interface CardContainerProps {
  imageUrl: string;
  isModal?: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
  min-width: 289px;
  min-height: 440px;
  border-radius: 30px;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 5;
  overflow: hidden;
  cursor: pointer;
  @media (max-width: 680px) {
    ${(props) =>
      props.isModal &&
      css`
        display: none;
      `}
  }
`;

export const DetailsContainer = styled.div`
  text-align: center;
  position: absolute;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 0, 0, 0.9) 30%,
    rgba(64, 14, 14, 0.5) 200%
  );
  padding: 20px;
  width: 100%;
  height: 234px;
  border-radius: 30px;
  pointer-events: none;

  h1 {
    font-size: 20px;
    color: #fff;
  }

  p {
    font-size: 12px;
    color: #fff;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  button {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Description = styled.p`
  font-size: 12px;
  font-family: "Axiforma-Thin";
  color: ${({ theme }) => theme.colors.primary.lighter};
  margin-bottom: 10px;
  line-height: 20px;
`;

export const EmptyDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary.lighter};
  font-family: "Axiforma-Light";
  margin-top: 10px;
  opacity: 0.8;
`;

export const SkeletonStyled = styled(Skeleton)`
  &.react-loading-skeleton {
    --base-color: #ad0101;
    --highlight-color: #ff0000;
  }
`;
