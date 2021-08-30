import React from "react";
import MediaQuery from "react-responsive";
import { Container, MainContainer, ResultVideosContainer } from "./styles";
import { ProfileResult } from "../ProfileResult/ProfileResult";
import { MusicMenu } from "../MusicMenu/MusicMenu";
import { VideoResults } from "../VideoResults/VideoResults";

export const Main = () => {
  return (
    <MainContainer>
      <Container>
        <ResultVideosContainer>
          <ProfileResult />
          <VideoResults />
        </ResultVideosContainer>
        <MediaQuery minWidth={1285}>
          <MusicMenu />
        </MediaQuery>
      </Container>
    </MainContainer>
  );
};
