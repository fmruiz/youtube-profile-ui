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
        publicationDate={"7 years ago"}
        textDescription={
          "Harthouse feuerfalter part 01 feuerfalter part 01 harthouse"
        }
      />
    </MainContainer>
  );
};
