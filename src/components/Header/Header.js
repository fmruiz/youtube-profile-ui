import React from "react";
import logo from "../../assets/logoyt.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { HeaderContainer, MicrophoneContainer } from "./styles";

const micro = <FontAwesomeIcon icon={faMicrophone} />;

export const Header = () => (
  <HeaderContainer>
    <img src={logo} alt="logo" width="200" />
    <MicrophoneContainer>{micro}</MicrophoneContainer>
  </HeaderContainer>
);
