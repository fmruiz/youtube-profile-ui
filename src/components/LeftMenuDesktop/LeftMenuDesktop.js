import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCompass,
  faLaptopCode,
  faSync,
  faPhotoVideo,
  faVideo,
  faClock,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { DividerBorder } from "../UI/DividerBorder/DividerBorder";
import { MenuItem } from "./MenuItem/MenuItem";
import { Container, LeftMenuDesktopContainer } from "./styles";

export const LeftMenuDesktop = () => {
  // logo components
  const Home = <FontAwesomeIcon icon={faHome} />;
  const Compass = <FontAwesomeIcon icon={faCompass} />;
  const Laptop = <FontAwesomeIcon icon={faLaptopCode} />;
  const Library = <FontAwesomeIcon icon={faPhotoVideo} />;
  const History = <FontAwesomeIcon icon={faSync} />;
  const Video = <FontAwesomeIcon icon={faVideo} />;
  const Clock = <FontAwesomeIcon icon={faClock} />;
  const Like = <FontAwesomeIcon icon={faThumbsUp} />;

  const firstMenu = [
    { text: "Home", logo: Home },
    { text: "Explore", logo: Compass },
    { text: "Subscriptions", logo: Laptop },
  ];

  const secondMenu = [
    { text: "Library", logo: Library },
    { text: "History", logo: History },
    { text: "Your videos", logo: Video },
    { text: "Watch later", logo: Clock },
    { text: "Liked videos", logo: Like },
  ];

  return (
    <LeftMenuDesktopContainer>
      <Container>
        {firstMenu.map((f, i) => (
          <MenuItem key={i} text={f.text} logo={f.logo} />
        ))}
      </Container>

      <DividerBorder />

      <Container>
        {secondMenu.map((f, i) => (
          <MenuItem key={i} text={f.text} logo={f.logo} />
        ))}
      </Container>

      <DividerBorder />
    </LeftMenuDesktopContainer>
  );
};
