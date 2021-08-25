import React from "react";
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
    </DescriptionContainer>
  </VideoResultContainer>
);
