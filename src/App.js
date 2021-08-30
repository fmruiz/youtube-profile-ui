import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Container } from "./styles";
// components
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
// redux
import { Provider } from "react-redux";
import store from "./redux/store";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <Body />
        </Container>
      </ThemeProvider>
    </Provider>
  );
};
