import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCompass,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { DividerBorder } from "../UI/DividerBorder/DividerBorder";
import { MenuItem } from "./MenuItem/MenuItem";
import { LeftMenuDesktopContainer } from "./styles";

export const LeftMenuDesktop = () => {
  // logo components
  const Home = <FontAwesomeIcon icon={faHome} />;
  const Compass = <FontAwesomeIcon icon={faCompass} />;
  const Laptop = <FontAwesomeIcon icon={faLaptopCode} />;

  const firstMenu = [
    { text: "Home", logo: Home },
    { text: "Explore", logo: Compass },
    { text: "Subscriptions", logo: Laptop },
  ];

  const secondMenu = [
    { text: "Library", logo: Home },
    { text: "History", logo: Compass },
    { text: "Your videos", logo: Laptop },
    { text: "Watch later", logo: Laptop },
    { text: "Liked videos", logo: Laptop },
  ];

  return (
    <LeftMenuDesktopContainer>
      {firstMenu.map((f, i) => (
        <MenuItem key={i} text={f.text} logo={f.logo} />
      ))}
      <DividerBorder />
      {secondMenu.map((f, i) => (
        <MenuItem key={i} text={f.text} logo={f.logo} />
      ))}
      <DividerBorder />
    </LeftMenuDesktopContainer>
  );
};
