import React from "react";
import {
  MenuItemContainer,
  MenuItemImg,
  MenuItemLogo,
  MenuItemText,
} from "./styles";

export const MenuItem = ({ logo, text, img }) => (
  <MenuItemContainer>
    {img ? (
      <MenuItemLogo>
        <MenuItemImg src={img} />
      </MenuItemLogo>
    ) : (
      <MenuItemLogo>{logo}</MenuItemLogo>
    )}
    <MenuItemText>{text}</MenuItemText>
  </MenuItemContainer>
);
