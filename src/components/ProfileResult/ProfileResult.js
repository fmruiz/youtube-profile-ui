import React from "react";
import LogoProfile from "../../assets/boris.jpg";
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
        name="Boris Brejcha"
        subscribers="767K subscribers"
        videos="193 videos"
        description="High-Tech Minimal - Exceptional Talent in 2007 - Created his own Genre High-Tech Minimal in 2012 - Established ..."
        isVerified
      />
    </Container>
    <Divider />
  </ProfileResultContainer>
);
