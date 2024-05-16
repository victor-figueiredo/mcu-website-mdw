import styled, { keyframes } from "styled-components";

export const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

export const Label = styled.label<{ disabled?: boolean }>`
  position: relative;
  display: inline-block;
  color: ${(props) => props.theme.colors.gray[200]};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin: 9px 0 0 0;
  padding-left: 23px;
  font-size: 15px;
`;

const rotate = keyframes`
 from {
        opacity: 0;
        transform: rotate(0deg);
    }
    to {
        opacity: 1;
        transform: rotate(45deg);
    }
`;

export const Indicator = styled.div`
  width: 20px;
  height: 21px;
  background: ${(props) => props.theme.colors.primary.lighter};
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid ${(props) => props.theme.colors.danger.dark};
  border-radius: 0.4em;

  ${Input}:not(:disabled):checked & {
    background: ${(props) => props.theme.colors.primary.lighter};
  }

  ${Label}:hover & {
    background: ${(props) => props.theme.colors.primary.lighter};
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    top: 0.02em;
    left: 0.25em;
    width: 40%;
    height: 70%;
    border: solid ${(props) => props.theme.colors.danger.dark};
    border-width: 0 0.2em 0.2em 0;
    animation: ${rotate} 0.3s forwards;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
