import styled, { keyframes } from "styled-components";

const moveLogoLg = keyframes`
  0% {
    transform: translate(44vw, 0%);
  }
  20% {
    transform: translate(44vw, 0%);
  }
  30% {
    transform: translate(48vw, 0%);
  }
  40% {
    transform: translate(0vw, 0%);
  }
  70% {
    transform: translate(0vw, 0%);
  }
  90% {
    transform: translate(0vw, 0%);
  }
  100% {
    transform: translate(0vw, -32vh);
  }
`;

const moveLogo = keyframes`
  0% {
    transform: translate(44vw, 0%);
  }
  20% {
    transform: translate(44vw, 0%);
  }
  30% {
    transform: translate(48vw, 0%);
  }
  40% {
    transform: translate(15vw, 0%);
  }
  70% {
    transform: translate(15vw, 0%);
  }
  90% {
    transform: translate(15vw, 0%);
  }
  100% {
    transform: translate(15vw, -32vh);
  }
`;

const moveLogoMobile = keyframes`
  0% {
    transform: translateY(0vh);
  }
  20% {
    transform: translateY(0vh);
  }
  30% {
    transform: translateY(2vh);
  }
  40% {
    transform: translateY(-32vh);
  }
  70% {
    transform: translateY(-32vh);
  }
  90% {
    transform: translateY(-32vh);
  }
  100% {
    transform: translateY(-32vh);
  }
`;

interface LogoProps {
  small?: boolean;
}

export const LogoStyled = styled.div<LogoProps>`
  width: 237px;
  height: 95px;
  text-align: center;
  font-size: 100px;
  font-family: "Marvel", sans-serif;
  color: ${({ theme }) => theme.colors.primary.lighter};
  background: ${({ theme }) => theme.colors.danger.dark};
  position: relative;
  z-index: 10;

  animation: ${moveLogo} 3s forwards;

  user-select: none;
  ${(props) =>
    props.small &&
    `
        line-height: 50px;
        width: 122px;
        height: 54px;
        font-size: 50px;
        animation: none;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 8px;
    `}

  @media (min-width: 1660px) {
    margin: 0 0 0 24vw;
    animation: ${moveLogoLg} 3s forwards;
    ${(props) =>
      props.small &&
      `
        animation: none;
        margin: 0;
      `}
  }

  @media (max-width: 1170px) {
    animation: ${moveLogoMobile} 3s forwards;
    margin: 0 auto;
    ${(props) =>
      props.small &&
      `
        margin: 0;
        animation: none;
      `}
  }
`;
