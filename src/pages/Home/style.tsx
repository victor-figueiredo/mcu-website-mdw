import styled from "styled-components";

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
