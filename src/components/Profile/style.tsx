import styled, { css } from "styled-components";
import Photo from "../../assets/images/profile.jpg";

export const ProfileContainer = styled.div`
  display: flex;
`;

export const ProfilePhoto = styled.div<{ imageUrl: string | null }>`
  ${(props) =>
    props.imageUrl
      ? css`
          background-image: url(${props.imageUrl});
        `
      : `
        background-image: url(${Photo}});
  `}
  background-size: cover;
  border-radius: 50%;
  width: 55px;
  height: 55px;
`;

export const LogoutButton = styled.div`
  font-size: 20px;
  line-height: 55px;
  color: ${(props) => props.theme.colors.gray[200]};
  margin-left: 10px;
  font-family: "Axiforma-Light";

  &:hover {
    color: ${(props) => props.theme.colors.primary.lighter};
  }
  cursor: pointer;
`;
