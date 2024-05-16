import styled, { css } from "styled-components";
import { InputProps } from "../../types";

const inputStyles = `
  padding: 16px;
  margin-bottom: 20px;
  outline: none;
`;

export const InputStyled = styled.input<InputProps>`
  ${inputStyles}
  border-radius: 25px;
  ${(props) =>
    props.isError
      ? css`
          border: 2px solid ${props.theme.colors.danger.dark};
          padding: 14px;
          margin-bottom: 0;
        `
      : css`
          border: none;
        `};
  color: #000;
  font-size: 22px;
`;

export const ErrorMessage = styled.span<{ isError: boolean }>`
  ${(props) => css`
    color: ${props.theme.colors.danger.dark};
    display: ${props.isError ? "block" : "none"};
  `};
  font-size: 12px;
  text-align: center;
  /* margin-top: 5px; */
`;

export const InputSearchStyled = styled.input`
  ${inputStyles}
  font-size: 16px;
  color: ${(props) => props.theme.colors.danger.dark};
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.colors.danger.dark};
  border-radius: 15px;
  padding-right: 30px;
  font-weight: bold;
  position: relative;
  z-index: 3;
  &:focus {
    font-weight: bold;
    border: 2px solid ${(props) => props.theme.colors.danger.dark};
  }

  &::placeholder {
    font-weight: bold;
    color: ${(props) => props.theme.colors.danger.dark};
    opacity: 0.5;
  }

  @media (max-width: 430px) {
    width: 100%;
  }
`;

export const InputFileStyled = styled.input`
  display: none;
`;

export const LabelStyled = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 26px;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.danger.dark};
  cursor: pointer;
`;
