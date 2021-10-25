import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import "@testing-library/jest-dom/extend-expect";
import { ProfileResult } from "../components/ProfileResult/ProfileResult";

test("Profile result in main body", () => {
  render(
    <ThemeProvider theme={theme}>
      <ProfileResult />
    </ThemeProvider>
  );
  //  verify divider has been an logo
  const logo = screen.getByTestId("logo");
  expect(logo).toBeInTheDocument();
  expect(logo.tagName).toBe("IMG");
  // verify profile description exists
  const profileDescription = screen.getByTestId("profile-description");
  expect(profileDescription).toBeInTheDocument();
});
