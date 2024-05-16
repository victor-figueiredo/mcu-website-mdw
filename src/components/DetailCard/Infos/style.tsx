import styled, { css } from "styled-components";

type AppearanceList = {
  showMore: boolean;
  shorterHeight: boolean;
};

type ContainerDescription = {
  activeScroll: boolean;
};

export const Title = styled.h1`
  font-size: 30px;
  line-height: 35px;
  margin-bottom: 10px;
`;

export const ContainerHQDescription = styled.div<ContainerDescription>`
  height: auto;
  ${(props) =>
    props.activeScroll &&
    css`
      flex: 1;
      height: 100%;
      overflow-y: scroll;
    `}
`;

export const ContainerMovieDescription = styled.div<{ activeScroll: boolean }>`
  height: auto;
  ${(props) =>
    props.activeScroll &&
    css`
      flex: 1;
      height: 100%;
      overflow-y: scroll;
    `}
`;

export const WatchProvidersContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 60px;
  gap: 4px;
  overflow-y: auto;
  overflow-x: auto;
`;

export const WatchProvider = styled.div<{ logo: string }>`
  width: 49px;
  height: 49px;
  min-width: 49px;
  min-height: 49px;
  border-radius: 9px;
  ${(props) =>
    props.logo &&
    `background-image: url(https://image.tmdb.org/t/p/w500${props.logo});`}
  background-size: cover;
`;

export const Description = styled.p`
  font-size: 12px;
  font-family: "Axiforma-Thin";
  color: ${({ theme }) => theme.colors.primary.lighter};
  margin-bottom: 10px;
`;

export const InfoTitle = styled.h2`
  font-size: 18px;
`;

export const Appearance = styled.p<{ canJumpLine?: boolean }>`
  font-size: 18px;
  color: #fff;
  margin: 5px 0;
  font-family: "Axiforma-Light";
  ${(props) =>
    !props.canJumpLine &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;

export const AppearanceList = styled.div<AppearanceList>`
  flex: 2;
  height: 100%;
  ${({ showMore }) => showMore && "overflow-y: scroll;"}
  margin-bottom: 10px;
`;

export const ShowMoreButton = styled.a`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary.lighter};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const EmptyDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary.lighter};
  font-family: "Axiforma-Light";
  margin-top: 10px;
  opacity: 0.7;
`;
