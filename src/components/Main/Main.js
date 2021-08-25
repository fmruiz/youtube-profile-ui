import React from "react";
import { MainContainer, ResultContainer } from "./styles";
import { ProfileResult } from "../ProfileResult/ProfileResult";
import { VideoResult } from "../VideoResult/VideoResult";

export const Main = () => {
  return (
    <MainContainer>
      <ProfileResult />
      <ResultContainer>
        <VideoResult
          videoTitle={"Boris Brejcha - Dark Planet (Original Mix)"}
          viewsQuantity={"2.4M views"}
          publicationDate={"7 years ago"}
          textDescription={
            "This show was organized on the occasion of the Grand Palais's exhibition The Moon. This exhibition is the opportunity to study, ..."
          }
        />
      </ResultContainer>
    </MainContainer>
  );
};
