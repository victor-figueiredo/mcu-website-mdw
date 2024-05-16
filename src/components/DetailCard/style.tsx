/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from "styled-components";

type CloseButtonProps = {
  onClick: () => void;
  position: string;
};

type CardDetail = {
  isMobile: boolean;
  details: any;
  position: { x: number; y: number };
};

export const DetailCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 440px;
  padding: 40px 20px;
  box-sizing: border-box;
  color: white;
`;

export const CloseButton = styled.div<CloseButtonProps>`
  width: 30px;
  height: 30px;
  position: absolute;
  ${({ position }) => (position === "right" ? "left: 20px;" : "right: 20px;")}
  bottom: 20px;
  color: white;
  font-size: 30px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s;
  &:hover {
    opacity: 1;
  }
`;

export const CardDetailContainer = styled.div<CardDetail>`
  position: absolute;
  z-index: 999;
  height: 440px;
  background: linear-gradient(
    to right,
    rgba(255, 0, 0, 0.9) 30%,
    rgba(64, 14, 14, 0.5) 200%
  );
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  width: 684px;
  ${(props) => css`
    flex-direction: ${props.details.direction === "right"
      ? "row-reverse"
      : "row"};
    left: ${props.isMobile ? "10vw" : `${props.position.x}px`};
    top: ${props.isMobile ? "214px" : `${props.position.y}px`};
  `}

  @media (max-width: 759px) {
    width: 80vw;
  }

  @media (max-width: 640px) {
    width: 90vw;
    top: 100px;
    left: 5vw;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  z-index: 998;
  background: linear-gradient(to right, rgb(0, 0, 0, 1) 50%, transparent);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`;
