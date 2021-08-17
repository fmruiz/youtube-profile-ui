import React from "react";
import LogoProfile from "../../assets/ninja.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { Divider } from "../UI/Divider/Divider";
import { Container, ProfileResultContainer, ProfileResultLogo } from "./styles";
import { Logo } from "../UI/Logo/Logo";
import { ProfileResultDescription } from "./ProfileResultDescription/ProfileResultDescription";
// FontAwesomeIcons
const filter = <FontAwesomeIcon icon={faSlidersH} />;

export const ProfileResult = () => (
  <ProfileResultContainer>
    <Divider title="FILTERS" icon={filter} />
    <Container>
      <ProfileResultLogo>
        <Logo source={LogoProfile} width={136} />
      </ProfileResultLogo>
      <ProfileResultDescription
        name="Ninja"
        subscribers="24.1M subscribers"
        description="Tyler Blevins is a professional Battle Royale Player and Streamer. He currently is playing Fortnite, Valorant, and Warzone ..."
        isVerified
      />
    </Container>
    <Divider />
  </ProfileResultContainer>
);
