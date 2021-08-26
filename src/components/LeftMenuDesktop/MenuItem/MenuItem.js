import React from "react";
import { MenuItemContainer, MenuItemLogo, MenuItemText } from "./styles";

export const MenuItem = ({ logo, text }) => (
  <MenuItemContainer>
    <MenuItemLogo>{logo}</MenuItemLogo>
    <MenuItemText>{text}</MenuItemText>
  </MenuItemContainer>
);
