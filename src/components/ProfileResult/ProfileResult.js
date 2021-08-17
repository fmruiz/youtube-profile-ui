import React from "react";
import LogoProfile from '../../assets/ninja.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { Divider } from "../UI/Divider/Divider";
import { Container, ProfileResultContainer, ProfileResultLogo } from "./styles";
import { Logo } from "../UI/Logo/Logo";
// FontAwesomeIcons
const filter = <FontAwesomeIcon icon={faSlidersH} />;

export const ProfileResult = () => (
  <ProfileResultContainer>
    <Divider title="FILTERS" icon={filter} />
    <Container>
        <ProfileResultLogo>
            <Logo source={LogoProfile} width={136} />
        </ProfileResultLogo>
    </Container>
    <Divider />
  </ProfileResultContainer>
);
