import React from "react";
import { MinimalLogoProfile } from "../UI/MinimalLogoProfile/MinimalLogoProfile";
import {
  ContainerQuantity,
  DescriptionContainer,
  Dot,
  VideoResultContainer,
  VideoResultQuantity,
  VideoResultTitle,
} from "./styles";

export const VideoResult = ({ videoTitle, viewsQuantity, PublicationDate }) => (
  <VideoResultContainer>
    <DescriptionContainer>
      <VideoResultTitle>{videoTitle}</VideoResultTitle>
      <ContainerQuantity>
        <VideoResultQuantity>{viewsQuantity}</VideoResultQuantity>
        <Dot>•</Dot>
        <VideoResultQuantity>{PublicationDate}</VideoResultQuantity>
      </ContainerQuantity>
      <MinimalLogoProfile name={"Boris Brejcha"} isVerified/>
    </DescriptionContainer>
  </VideoResultContainer>
);
