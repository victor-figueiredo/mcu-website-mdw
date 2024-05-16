import styled from "styled-components";
import { ButtonProps } from "../../types";

const ButtonType = {
  default: `
    font-size: 20px;
  `,
  login: `
    background-color: #FF0000;
    font-size: 28px;
  `,
  filter: `
    font-size: 16px;
    text-decoration: underline;
    color: #FF0000;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 54px;
  `,
};

export const ButtonStyled = styled.button<ButtonProps>`
  padding: 10px;
  border-radius: 25px;
  border: none;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.primary.lighter};
  background-color: transparent;

  ${(props) => ButtonType[props.buttonType as keyof typeof ButtonType]};
`;
