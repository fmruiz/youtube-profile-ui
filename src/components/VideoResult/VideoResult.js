import React from "react";
import {
  ContainerQuantity,
  VideoResultContainer,
  VideoResultQuantity,
  VideoResultTitle,
} from "./styles";

export const VideoResult = ({ videoTitle, viewsQuantity, PublicationDate }) => (
  <VideoResultContainer>
    <VideoResultTitle>{videoTitle}</VideoResultTitle>
    <ContainerQuantity>
      <VideoResultQuantity>{viewsQuantity}</VideoResultQuantity>•
      <VideoResultQuantity>{PublicationDate}</VideoResultQuantity>
    </ContainerQuantity>
  </VideoResultContainer>
);
