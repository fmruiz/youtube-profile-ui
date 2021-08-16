import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Container } from "./styles";
// components
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Body />
      </Container>
    </ThemeProvider>
  );
};
