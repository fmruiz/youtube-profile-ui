import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
// component
import { ProfileResult } from "../components/ProfileResult/ProfileResult";

test("Profile result in main body", () => {
  render(
    <ThemeProvider theme={theme}>
      <ProfileResult />
    </ThemeProvider>
  );
  //  verify divider has been an logo
  const profileLogo = screen.getByTestId("logo");
  expect(profileLogo).toBeInTheDocument();
  expect(profileLogo.tagName).toBe("IMG");
  // verify profile description exists
  const profileDescription = screen.getByTestId("profile-description");
  const profileName = screen.getByTestId("profile-name");
  const profileSubs = screen.getByTestId("profile-subs");
  const profileVideo = screen.getByTestId("profile-videos");
  const profileDescriptionText = screen.getByTestId("profile-description-text");
  expect(profileDescription).toBeInTheDocument();
  expect(profileName.tagName).toBe("P");
  expect(profileSubs.tagName).toBe("SPAN");
  expect(profileVideo.tagName).toBe("SPAN");
  expect(profileDescriptionText.tagName).toBe("SPAN");
  //   verify two dividers
  const profileDivider = screen.getAllByTestId("divider")[0];
  expect(profileDivider).toBeInTheDocument();
  // click btn sub
  const btnSub = screen.getByTestId('btn-sub');
  userEvent.click(btnSub)
});
