import styled from "styled-components";
import Select from "react-select";

export const StyledSelect = styled(Select).attrs({
  classNamePrefix: "react-select",
  components: { IndicatorSeparator: null },
})`
  .react-select__control {
    height: 54px;
    background-color: ${(props) => props.theme.colors.primary.dark};
    border: 2px solid ${(props) => props.theme.colors.danger.dark};
    padding: 16px;
    border-radius: 15px;
    padding: 5px;
    font-size: 22px;
    font-weight: bold;
    position: relative;
    z-index: 3; // aqui
    &:hover {
      border-color: ${(props) => props.theme.colors.danger.dark};
      color: ${(props) => props.theme.colors.primary.dark};
    }
  }

  .react-select__control--is-focused {
    outline: none;
    border-color: ${(props) => props.theme.colors.danger.dark};
    color: ${(props) => props.theme.colors.primary.dark};
    box-shadow: none;
  }

  .react-select__value-container {
    color: ${(props) => props.theme.colors.danger.dark};
  }

  .react-select__single-value {
    color: ${(props) => props.theme.colors.danger.dark};
    font-size: 16px;
    font-weight: bold;
  }

  .react-select__menu {
    z-index: 999;
    margin-top: -16px;
    border-radius: 0 0 15px 15px;
  }

  .react-select__menu-list {
    color: ${(props) => props.theme.colors.danger.dark};
    background: ${(props) => props.theme.colors.primary.dark};
    margin-top: -16px;
    border-left: 2px solid ${(props) => props.theme.colors.danger.dark};
    border-right: 2px solid ${(props) => props.theme.colors.danger.dark};
    border-bottom: 2px solid ${(props) => props.theme.colors.danger.dark};
    border-radius: 0 0 15px 15px;
    font-weight: bold;
    .react-select__option--is-focused {
      background-color: ${(props) => props.theme.colors.primary.dark};
      color: ${(props) => props.theme.colors.danger.dark};
    }

    .react-select__option--is-selected {
      background-color: ${(props) => props.theme.colors.danger.dark};
      color: ${(props) => props.theme.colors.primary.dark};
    }
  }

  .react-select__value-container--has-value {
    color: yellow;
  }

  .react-select__input-container {
    color: green;
  }

  .react-select__indicator {
    color: ${(props) => props.theme.colors.danger.dark};
    &:hover {
      color: ${(props) => props.theme.colors.danger.dark};
    }
  }

  .react-select__option {
    &:hover {
      color: ${(props) => props.theme.colors.primary.dark};
      background: ${(props) => props.theme.colors.danger.dark};
    }
  }
`;

export const SelectStyled = styled.select`
  padding: 16px;
  margin-bottom: 20px;
  outline: none;
  border-radius: 25px;
  border: 2px solid ${(props) => props.theme.colors.danger.dark};
  color: ${(props) => props.theme.colors.danger.dark};
  font-size: 22px;
  background-color: transparent;

  &::-ms-expand {
    color: ${(props) => props.theme.colors.danger.dark};
  }
  &::after {
    color: ${(props) => props.theme.colors.danger.dark};
  }
`;
