import { ButtonProps } from "../../types";
import { ButtonStyled } from "./style";
import { TbFilterX } from "react-icons/tb";

export const Button = (props: ButtonProps) => {
  return (
    <ButtonStyled
      type={props.type}
      buttonType={props.buttonType}
      onClick={props.onClick}
    >
      {props.label}
    </ButtonStyled>
  );
};

export const CleanFilterButton = (props: ButtonProps) => {
  return (
    <ButtonStyled
      type={props.type}
      buttonType={props.buttonType}
      onClick={props.onClick}
    >
      <TbFilterX />
    </ButtonStyled>
  );
};
