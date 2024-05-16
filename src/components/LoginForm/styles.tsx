import { MdDelete } from "react-icons/md";
import styled, { css, keyframes } from "styled-components";

const showForm = keyframes`
    0% {
        opacity: 0;
    }
    90% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const showFormMobile = keyframes`
    0% {
        opacity: 0;
    }
    90% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const FormStyled = styled.form<{ animated?: boolean }>`
  width: 383px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 3;
  margin: 27vh 0 0 10vw;

  h1 {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.danger.dark};
    margin-bottom: 6px;
  }

  small {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.gray[200]};
    margin-bottom: 16px;
  }

  animation: ${(props) =>
    props.animated
      ? css`
          ${showForm} 3s forwards
        `
      : "none"};

  @media (min-width: 1660px) {
    margin: 27vh 0 0 20vw;
  }

  @media (max-width: 1170px) {
    margin: 27vh 0 0 0;
    animation: ${(props) =>
      props.animated
        ? css`
            ${showFormMobile} 1s forwards;
          `
        : "none"};
  }
  @media (max-width: 440px) {
    width: 100%;
    padding: 0 20px;
    margin: 25vh 0 0 0;
  }
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ForgotPassword = styled.div`
  width: auto;
  height: 20px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.gray[200]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.danger.dark};
  margin-top: 9px;
  cursor: pointer;
`;

export const NoHasAccount = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  small {
    font-size: 16px;
  }

  a {
    color: ${({ theme }) => theme.colors.danger.dark};
    cursor: pointer;
    font-size: 16px;
  }
`;

export const ProfilePhoto = styled.div<{ src: string }>`
  background-image: url(${(props) => props.src && `${props.src}`});
  background-size: cover;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  cursor: pointer;
`;

export const TrashIcon = styled(MdDelete)`
  position: absolute;
  right: -2px;
  bottom: 0;
  font-size: 20px;
  background-color: ${({ theme }) => theme.colors.danger.dark};
  color: ${({ theme }) => theme.colors.primary.lighter};
  padding: 2px;
  border-radius: 50%;
  box-sizing: content-box;
  cursor: pointer;
`;

export const UploadImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const ImageContainer = styled.div`
  position: relative;
`;
