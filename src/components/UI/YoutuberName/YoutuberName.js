import React from "react";
import {
  IconDiv,
  Name,
  TextContainer,
  YoutuberImg,
  YoutuberNameContainer,
} from "./styles";

export const YoutuberName = ({ logo, name, icon }) => (
  <YoutuberNameContainer>
    <YoutuberImg src={logo} />
    <TextContainer>
      <Name>{name}</Name>
      <IconDiv>{icon}</IconDiv>
    </TextContainer>
  </YoutuberNameContainer>
);
