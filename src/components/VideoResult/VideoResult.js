import React from "react";
import { MinimalLogoProfile } from "../UI/MinimalLogoProfile/MinimalLogoProfile";
import {
  ContainerQuantity,
  DescriptionCenter,
  DescriptionContainer,
  DescriptionText,
  Dot,
  VideoResultContainer,
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
