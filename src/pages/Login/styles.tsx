import styled, { keyframes } from "styled-components";

const showImage = keyframes`
    0% {
        opacity: 0;
    }
    70% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const showImageMobile = keyframes`
    0% {
        opacity: 0;
    }
    40% {
        opacity: 1;
    }
    60% {
        opacity: 1;
      }
    80% {
        opacity: .2;
    }
    100% {
        opacity: .2;
    }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary.dark};
  position: relative;
  z-index: 2;
`;

export const ContainerLogo = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
`;

export const FormContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 3;
  /* @media (min-width: 1660px) { */
  /* display: flex; */
  /* justify-content: center; */
  /* } */

  @media (max-width: 1170px) {
    display: flex;
    justify-content: center;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  height: 100vh;
  overflow: hidden;

  img {
    position: relative;
    z-index: 1;
    width: 1200px;
    animation: ${showImage} 1.2s forwards;
  }

  /* @media (min-width: 1660px) { */
  /* img { */
  /* animation: ${showImage} 1.2s forwards; */
  /* } */
  /* } */

  @media (max-width: 1170px) {
    img {
      animation: ${showImageMobile} 1.2s forwards;
    }
  }
`;
