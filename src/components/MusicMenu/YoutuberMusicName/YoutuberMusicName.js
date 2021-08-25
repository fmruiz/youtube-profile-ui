import React from "react";
import LogoYT from "../../../assets/boris.jpg";
import { YoutuberNameNoImg } from "../../UI/YoutuberNameNoImg/YoutuberNameNoImg";
import {
  SimpleText,
  YoutuberContainerDescription,
  YoutuberLogo,
  YoutuberMusicNameContainer,
} from "./styles";

export const YoutuberMusicName = () => (
  <YoutuberMusicNameContainer>
    <YoutuberLogo src={LogoYT} />
    <YoutuberContainerDescription>
      <YoutuberNameNoImg youtuberName={"Boris Brejcha"} />
      <SimpleText>Music</SimpleText>
    </YoutuberContainerDescription>
  </YoutuberMusicNameContainer>
);
