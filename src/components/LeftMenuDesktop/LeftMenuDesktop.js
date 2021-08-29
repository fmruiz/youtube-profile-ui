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
  faCog,
  faFlag,
  faQuestionCircle,
  faCommentAlt,
  faFilm,
  faGamepad,
  faSatelliteDish,
  faLightbulb,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { DividerBorder } from "../UI/DividerBorder/DividerBorder";
import { MenuItem } from "./MenuItem/MenuItem";
import { Container, LeftMenuDesktopContainer } from "./styles";
import { LeftMenuFooter } from "./LeftMenuFooter/LeftMenuFooter";

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
  const Movies = <FontAwesomeIcon icon={faFilm} />;
  const Youtube = <FontAwesomeIcon icon={faYoutube} />;
  const Gamepad = <FontAwesomeIcon icon={faGamepad} />;
  const Live = <FontAwesomeIcon icon={faSatelliteDish} />;
  const Learning = <FontAwesomeIcon icon={faLightbulb} />;
  const Sports = <FontAwesomeIcon icon={faTrophy} />;
  const Settings = <FontAwesomeIcon icon={faCog} />;
  const Report = <FontAwesomeIcon icon={faFlag} />;
  const Help = <FontAwesomeIcon icon={faQuestionCircle} />;
  const Feedback = <FontAwesomeIcon icon={faCommentAlt} />;

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

  const thirdMenu = [
    { text: "Youtube Premium", logo: Youtube },
    { text: "Movies", logo: Movies },
    { text: "Gaming", logo: Gamepad },
    { text: "Live", logo: Live },
    { text: "Learning", logo: Learning },
    { text: "Sports", logo: Sports },
  ];

  const settingsMenu = [
    { text: "Settings", logo: Settings },
    { text: "Report history", logo: Report },
    { text: "Help", logo: Help },
    { text: "Send feedback", logo: Feedback },
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

      <Container>
        {thirdMenu.map((f, i) => (
          <MenuItem key={i} text={f.text} logo={f.logo} />
        ))}
      </Container>

      <DividerBorder />

      <Container>
        {settingsMenu.map((f, i) => (
          <MenuItem key={i} text={f.text} logo={f.logo} />
        ))}
      </Container>

      <DividerBorder />

      <Container>
        <LeftMenuFooter />
      </Container>

      <DividerBorder />
    </LeftMenuDesktopContainer>
  );
};
