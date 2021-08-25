import React from "react";
import { MainContainer } from "./styles";
import { ProfileResult } from "../ProfileResult/ProfileResult";
import { VideoResult } from "../VideoResult/VideoResult";

export const Main = () => {
  return (
    <MainContainer>
      <ProfileResult />
      <VideoResult
        videoTitle={"Boris Brejcha - Dark Planet (Original Mix)"}
        viewsQuantity={"2.4M views"}
        PublicationDate={"7 years ago"}
      />
    </MainContainer>
  );
};
