import React from "react";
import Song from "../../assets/song.jpg";
import { MinimalLogoProfile } from "../UI/MinimalLogoProfile/MinimalLogoProfile";
import {
  ContainerQuantity,
  DescriptionCenter,
  DescriptionContainer,
  DescriptionText,
  Dot,
  VideoResultContainer,
  VideoResultImg,
  VideoResultQuantity,
  VideoResultTitle,
} from "./styles";

export const VideoResult = ({
  videoTitle,
  viewsQuantity,
  publicationDate,
  textDescription,
}) => (
  <VideoResultContainer>
    <VideoResultImg src={Song} />
    <DescriptionContainer>
      <VideoResultTitle>{videoTitle}</VideoResultTitle>
      <ContainerQuantity>
        <VideoResultQuantity>{viewsQuantity}</VideoResultQuantity>
        <Dot>•</Dot>
        <VideoResultQuantity>{publicationDate}</VideoResultQuantity>
      </ContainerQuantity>
      <DescriptionCenter>
        <MinimalLogoProfile name={"Boris Brejcha"} isVerified />
      </DescriptionCenter>
      <DescriptionText>{textDescription}</DescriptionText>
    </DescriptionContainer>
  </VideoResultContainer>
);
