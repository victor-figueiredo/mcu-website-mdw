import styled from "styled-components";

type OptionProps = {
  selected: boolean;
};

export const NavbarContainer = styled.div`
  position: relative;
  z-index: 4;
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.colors.primary.dark};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  box-shadow: 0px 2px 4px rgba(255, 0, 0, 0.5);
  @media (max-width: 920px) {
    padding: 0 30px;
  }
`;

export const OptionsContainer = styled.li`
  position: relative;
  z-index: 1001;
  display: flex;
  gap: 100px;

  @media (max-width: 1170px) {
    gap: 60px;
  }

  @media (min-width: 641px) and (max-width: 920px) {
    gap: 30px;
  }
  @media (max-width: 640px) {
    gap: 15px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Option = styled.ul<OptionProps>`
  position: relative;
  z-index: 1001;
  font-size: 30px;
  color: ${(props) =>
    props.selected
      ? props.theme.colors.primary.lighter
      : props.theme.colors.gray[200]};
  display: flex;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.primary.lighter};
  }

  @media (max-width: 920px) {
    font-size: 20px;
  }
`;

export const MobileNavButton = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const MobileNavBarContainer = styled.div<{ open: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1000000;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(-100%)")};
  background-color: #000;
  transition: all 300ms ease-in-out;
`;

export const MobileNavOptions = styled.div`
  height: 100vh;
  width: 100vw;
  font-size: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const MobileNavOption = styled.ul<OptionProps>`
  position: relative;
  z-index: 1001;
  font-size: 30px;
  color: ${(props) =>
    props.selected
      ? props.theme.colors.danger.dark
      : props.theme.colors.primary.lighter};
  display: flex;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.primary.lighter};
  }

  @media (max-width: 920px) {
    font-size: 20px;
  }
`;

export const MobileNavbarClose = styled.div`
  position: absolute;
  right: 2rem;
  top: 2rem;
  z-index: 10000000;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  color: #ff0000;
`;
