import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  DescriptionContainer,
  DotContainer,
  IconDiv,
  ProfileName,
  ProfileNameContainer,
  TextContainer,
  TextDescription,
} from "./styles";
import { Suscribe } from "../../UI/Suscribe/Suscribe";

// FontAwesomeIcon
const Check = <FontAwesomeIcon icon={faCheckCircle} />;

export const ProfileResultDescription = ({
  name,
  subscribers,
  videos,
  description,
  isVerified,
}) => {
  // subscribe state
  const [subscribed, setSubscribed] = useState(true);

  return (
    <DescriptionContainer data-testid={"profile-description"}>
      <TextContainer>
        <ProfileNameContainer>
          <ProfileName>{name}</ProfileName>
          {isVerified && <IconDiv>{Check}</IconDiv>}
        </ProfileNameContainer>
        <Container>
          <TextDescription>{subscribers}</TextDescription>
          <DotContainer>•</DotContainer>
          <TextDescription>{videos}</TextDescription>
        </Container>
        <TextDescription>{description}</TextDescription>
      </TextContainer>
      <div onClick={() => setSubscribed(!subscribed)}>
        <Suscribe isSuscribed={subscribed} />
      </div>
    </DescriptionContainer>
  );
};
