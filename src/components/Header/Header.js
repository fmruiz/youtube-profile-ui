import React from "react";
import logoUser from "../../assets/logo.jpg";
import logo from "../../assets/logoyt.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faUpload,
  faBell,
  faBorderNone,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  HeaderContainer,
  IconsDiv,
  ImgUser,
  LeftSection,
  MicrophoneContainer,
  RightSection,
} from "./styles";

// logo FontAwesomeIcon
const micro = <FontAwesomeIcon icon={faMicrophone} />;
const upload = <FontAwesomeIcon icon={faUpload} />;
const bell = <FontAwesomeIcon icon={faBell} />;
const borderNone = <FontAwesomeIcon icon={faBorderNone} />;
const menu = <FontAwesomeIcon icon={faBars} />;

export const Header = () => (
  <HeaderContainer>
    <Container>
    <LeftSection>
      <IconsDiv>{menu}</IconsDiv>
      <img src={logo} alt="logo" width="200" />
    </LeftSection>
    <MicrophoneContainer>{micro}</MicrophoneContainer>
    <RightSection>
      <IconsDiv>{upload}</IconsDiv>
      <IconsDiv>{borderNone}</IconsDiv>
      <IconsDiv>{bell}</IconsDiv>
      <ImgUser src={logoUser} alt="logo-user" width="38" />
    </RightSection>
    </Container>
  </HeaderContainer>
);
