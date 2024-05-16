import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "../../assets/styles/global";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../assets/styles/themes/default";
import { Container } from "./styles";
import Routes from "../../Routes";
import { AuthProvider } from "../../context/AuthContext";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Container>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
