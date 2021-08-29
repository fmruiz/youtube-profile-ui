import React from "react";
import MediaQuery from "react-responsive";
import {
  Container,
  MainContainer,
  ResultContainer,
  ResultVideosContainer,
} from "./styles";
import { ProfileResult } from "../ProfileResult/ProfileResult";
import { VideoResult } from "../VideoResult/VideoResult";
import { MusicMenu } from "../MusicMenu/MusicMenu";

export const Main = () => {
  return (
    <MainContainer>
      <Container>
        <ResultVideosContainer>
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
        </ResultVideosContainer>
        <MediaQuery minWidth={1285}>
          <MusicMenu />
        </MediaQuery>
      </Container>
    </MainContainer>
  );
};
