import { createGlobalStyle } from "styled-components";
import MarvelFont from "../fonts/Marvel-Regular.ttf";
import AxiformaBold from "../fonts/Axiforma-Bold.otf";
import AxiformaLight from "../fonts/Axiforma-Light.otf";
import AxiformaThin from "../fonts/Axiforma-Thin.otf";

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'Marvel';
      src: url(${MarvelFont}) format('truetype');
      font-style: normal;
    }

    @font-face {
      font-family: 'Axiforma-Bold';
      src: url(${AxiformaBold}) format('opentype');
      font-style: normal;
    }

    @font-face {
      font-family: 'Axiforma-Light';
      src: url(${AxiformaLight}) format('opentype');
      font-style: normal;
    }

    @font-face {
      font-family: 'Axiforma-Thin';
      src: url(${AxiformaThin}) format('opentype');
      font-style: normal;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.colors.primary.dark};
        font-family: 'Axiforma-Bold';
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
          background-color: ${({ theme }) => theme.colors.primary.dark};
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #fff;
          border-radius: 4px;
        }
        box-sizing: border-box;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;
