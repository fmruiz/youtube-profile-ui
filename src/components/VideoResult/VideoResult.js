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
    <VideoResultImg src={Song} data-testid={"video-result-img"}/>
    <DescriptionContainer>
      <VideoResultTitle data-testid={"video-result-title"}>{videoTitle}</VideoResultTitle>
      <ContainerQuantity>
        <VideoResultQuantity data-testid={"video-result-views"}>{viewsQuantity}</VideoResultQuantity>
        <Dot>•</Dot>
        <VideoResultQuantity data-testid={"video-result-date"}>{publicationDate}</VideoResultQuantity>
      </ContainerQuantity>
      <DescriptionCenter>
        <MinimalLogoProfile name={"Boris Brejcha"} isVerified />
      </DescriptionCenter>
      <DescriptionText data-testid={"video-result-text"}>{textDescription}</DescriptionText>
    </DescriptionContainer>
  </VideoResultContainer>
);
