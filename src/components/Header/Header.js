import React from "react";
import logo from "../../assets/logoyt.png";
import { HeaderContainer } from "./styles";

export const Header = () => (
  <HeaderContainer>
    <img src={logo} alt="logo" width="200" />
  </HeaderContainer>
);
