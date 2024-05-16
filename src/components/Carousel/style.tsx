import styled from "styled-components";

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 20px 60px 0 60px;
  gap: 30px;

  @media (max-width: 682px) {
    margin: 20px 30px 0 30px;
    gap: 20px;
  }

  @media (max-width: 530px) {
    /* flex-direction: column; */
    gap: 10px;
  }
`;

export const InputForm = styled.form`
  @media (max-width: 682px) {
    width: 100%;
    input {
      width: 100%;
      margin-bottom: 0;
    }
  }
`;

export const SelectContainer = styled.div`
  @media (max-width: 682px) {
    width: 100%;
  }
`;

export const FormCleaner = styled.form`
  width: 91.58px;
  position: relative;
  z-index: 3;
  button:first-child {
    display: none;
  }

  @media (max-width: 682px) {
    width: 40px;
    button:first-child {
      display: block;
      width: 40px;
      margin-bottom: 0;
      svg {
        width: 40px;
        height: 40px;
      }
    }

    button:nth-child(2) {
      display: none;
      width: 91.58px;
      margin-bottom: 0;
    }
  }
`;
