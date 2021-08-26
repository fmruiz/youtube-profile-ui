import React from "react";
import { DividerBorder } from "../UI/DividerBorder/DividerBorder";
import { MenuItem } from "./MenuItem/MenuItem";
import { LeftMenuDesktopContainer } from "./styles";

export const LeftMenuDesktop = () => {
  const firstMenu = [
    { text: "Home" },
    { text: "Explore" },
    { text: "Subscriptions" },
  ];

  return (
    <LeftMenuDesktopContainer>
      {firstMenu.map((f, i) => (
        <MenuItem key={i} text={f.text} />
      ))}
      <DividerBorder />
    </LeftMenuDesktopContainer>
  );
};
