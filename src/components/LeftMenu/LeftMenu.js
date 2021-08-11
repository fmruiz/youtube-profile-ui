import React from "react";
import {
  ContainerItemMenus,
  ItemMenu,
  LeftMenuContainer,
  TextMenu,
} from "./styles";

export const LeftMenu = () => {
  const menuItems = [
    { name: "Home" },
    { name: "Explore" },
    { name: "Suscriptions" },
    { name: "Library" },
  ];

  return (
    <LeftMenuContainer>
      <ContainerItemMenus>
        {menuItems.map(({ name }) => (
          <ItemMenu>
            <TextMenu>{name}</TextMenu>
          </ItemMenu>
        ))}
      </ContainerItemMenus>
    </LeftMenuContainer>
  );
};
