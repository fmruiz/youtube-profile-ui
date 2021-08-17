import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  DescriptionContainer,
  IconDiv,
  ProfileName,
  ProfileNameContainer,
  TextContainer,
  TextDescription,
} from "./styles";

// FontAwesomeIcon
const Check = <FontAwesomeIcon icon={faCheckCircle} />;

export const ProfileResultDescription = ({
  name,
  subscribers,
  videos,
  description,
  isVerified
}) => (
  <DescriptionContainer>
    <TextContainer>
      <ProfileNameContainer>
        <ProfileName>{name}</ProfileName>
        {isVerified && <IconDiv>{Check}</IconDiv>}
      </ProfileNameContainer>
      <Container>
        <TextDescription>{subscribers}</TextDescription>
        <TextDescription>{videos}</TextDescription>
      </Container>
      <TextDescription>{description}</TextDescription>
    </TextContainer>
  </DescriptionContainer>
);
