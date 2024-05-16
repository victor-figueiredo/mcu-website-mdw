/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { StyledSelect } from "./style";
import { SelectProps } from "../../types";

const SelectComponent: React.FC<SelectProps> = ({
  onChange,
  selectedOption,
}) => {
  const options = [
    { value: "none", label: "Filtrar por" },
    { value: "primary_release_date.desc", label: "Cronologia" },
    { value: "primary_release_date.asc", label: "Lançamento" },
  ];

  return (
    <StyledSelect
      options={options}
      onChange={onChange}
      value={options.filter(function (option) {
        return option.value === selectedOption;
      })}
    />
  );
};

export default SelectComponent;
