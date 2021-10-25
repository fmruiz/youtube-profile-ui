import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import "@testing-library/jest-dom/extend-expect";
// components
import { VideoResult } from "../components/VideoResult/VideoResult";

test("Verify elements in VideoResults components", () => {
  render(
    <ThemeProvider theme={theme}>
      <VideoResult />
    </ThemeProvider>
  );
  //   verify video img
  const videoResultImg = screen.getByTestId("video-result-img");
  expect(videoResultImg).toBeInTheDocument();
  expect(videoResultImg.tagName).toBe("IMG");
  //   verify is video result title exist
  const videoResultTitle = screen.getByTestId("video-result-title");
  expect(videoResultTitle).toBeInTheDocument();
  expect(videoResultTitle.tagName).toBe("P");
  //   verify is videos views quantity exists
  const videoResultViews = screen.getByTestId("video-result-views");
  expect(videoResultViews).toBeInTheDocument();
  expect(videoResultViews.tagName).toBe("SPAN");
  //   verify is publication date exists
  const videoResultsPublicationDate = screen.getByTestId("video-result-date");
  expect(videoResultsPublicationDate).toBeInTheDocument();
  expect(videoResultsPublicationDate.tagName).toBe("SPAN");
  //   verify is video results description exists
  const videoResultText = screen.getByTestId("video-result-text");
  expect(videoResultText).toBeInTheDocument();
  expect(videoResultText.tagName).toBe("P");
});
