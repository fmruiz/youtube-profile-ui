import React from "react";
import LogoYT from "../../../assets/boris.jpg";
import { Suscribe } from "../../UI/Suscribe/Suscribe";
import { YoutuberNameNoImg } from "../../UI/YoutuberNameNoImg/YoutuberNameNoImg";
import {
  SimpleText,
  YoutuberContainerDescription,
  YoutuberLogo,
  YoutuberLogoContainer,
  YoutuberMusicNameContainer,
} from "./styles";

export const YoutuberMusicName = () => (
  <YoutuberMusicNameContainer>
    <YoutuberLogoContainer>
      <YoutuberLogo src={LogoYT} />
    </YoutuberLogoContainer>
    <YoutuberContainerDescription>
      <YoutuberNameNoImg youtuberName={"Boris Brejcha"} />
      <SimpleText>Music</SimpleText>
      <Suscribe isSuscribed/>
    </YoutuberContainerDescription>
  </YoutuberMusicNameContainer>
);
