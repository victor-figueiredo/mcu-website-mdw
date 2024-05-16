import {
  ErrorMessage,
  InputFileStyled,
  InputSearchStyled,
  InputStyled,
  LabelStyled,
} from "./style";
import { FaSearch } from "react-icons/fa";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

import { InputProps } from "../../types";

const Input = ({
  onChange,
  value,
  placeholder,
  type,
  isError = false,
  errorData,
}: InputProps) => {
  return (
    <>
      <InputStyled
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        isError={isError}
        errorData={errorData}
      />
      <ErrorMessage isError={isError}>{errorData?.message}</ErrorMessage>
    </>
  );
};

const SearchInput = ({ placeholder, disabled, id }: InputProps) => {
  return (
    <>
      <InputSearchStyled
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        type="text"
      />
      <button
        type="submit"
        style={{
          backgroundColor: "transparent",
          border: "none",
          marginLeft: "-30px",
          height: "16px",
          position: "relative",
          zIndex: "3",
        }}
        disabled={disabled}
      >
        <FaSearch style={{ color: "red", fontSize: "16px" }} />
      </button>
    </>
  );
};

const InputFile = ({ onChange, value }: InputProps) => {
  return (
    <>
      <LabelStyled htmlFor="fileInput">
        <MdOutlineAddPhotoAlternate color="#FFF" />
      </LabelStyled>
      <InputFileStyled
        id="fileInput"
        onChange={onChange}
        value={value}
        type="file"
        accept="image/*"
      />
    </>
  );
};

export { Input, SearchInput, InputFile };
