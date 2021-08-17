import React from "react";
import {
  Container,
  DescriptionContainer,
  ProfileName,
  TextContainer,
  TextDescription,
} from "./styles";

export const ProfileResultDescription = ({
  name,
  subscribers,
  videos,
  description,
}) => (
  <DescriptionContainer>
    <TextContainer>
      <ProfileName>{name}</ProfileName>
      <Container>
        <TextDescription>{subscribers}</TextDescription>
        <TextDescription>{videos}</TextDescription>
      </Container>
    <TextDescription>{description}</TextDescription>
    </TextContainer>
  </DescriptionContainer>
);
