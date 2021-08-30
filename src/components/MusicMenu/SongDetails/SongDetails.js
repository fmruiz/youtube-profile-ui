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
    { name: "The Darknest Night", views: "1.6M views", duration: "7:16" },
    { name: "Kittys Journey", views: "1.7M views", duration: "7:45" },
    { name: "Purple Noise", views: "11M views", duration: "9:00" },
    { name: "Redemption", views: "1M views", duration: "8:54" },
    { name: "Never Look Back", views: "4.1M views", duration: "3:29" },
    { name: "Take It Smart", views: "1.9M views", duration: "7:18" },
    { name: "Spicy", views: "716K views", duration: "3:35" },
    { name: "House Music", views: "1M views", duration: "6:34" },
    { name: "Blue Lake", views: "1.5M views", duration: "8:10" },
  ];

  return (
    <>
      {songs.map((s, i) => (
        <SongDetailsContainer key={i}>
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
