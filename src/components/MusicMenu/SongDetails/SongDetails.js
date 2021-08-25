import React from "react";
import {
  SongContainer,
  SongDetailsContainer,
  SongDetailsDuration,
  SongDetailsTitle,
  SongDetailsViews,
} from "./styles";

export const SongDetails = () => {
  const songs = [
    { name: "Gravity (Edit)", views: "537K views", duration: "3:46" },
  ];

  return (
    <>
      {songs.map((s) => (
        <SongDetailsContainer>
          <SongContainer>
            <SongDetailsTitle>{s.name}</SongDetailsTitle>
            <SongDetailsViews>{s.views}</SongDetailsViews>
          </SongContainer>
          <SongDetailsDuration>{s.duration}</SongDetailsDuration>
        </SongDetailsContainer>
      ))}
    </>
  );
};
