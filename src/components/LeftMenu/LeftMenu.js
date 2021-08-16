import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAddressCard,
  faCompass,
  faPhotoVideo,
} from "@fortawesome/free-solid-svg-icons";
import {
  ContainerItemMenus,
  ItemMenu,
  LeftMenuContainer,
  TextMenu,
} from "./styles";

// logos fontawesome
const home = <FontAwesomeIcon icon={faHome} />;
const compass = <FontAwesomeIcon icon={faCompass} />;
const adress = <FontAwesomeIcon icon={faAddressCard} />;
const photo = <FontAwesomeIcon icon={faPhotoVideo} />;

export const LeftMenu = () => {
  const menuItems = [
    { name: "Home", logo: home },
    { name: "Explore", logo: compass },
    { name: "Suscriptions", logo: adress },
    { name: "Library", logo: photo },
  ];

  return (
    <LeftMenuContainer>
      <ContainerItemMenus>
        {menuItems.map(({ name, logo }) => (
          <ItemMenu>
            <div>{logo}</div>
            <TextMenu>{name}</TextMenu>
          </ItemMenu>
        ))}
      </ContainerItemMenus>
    </LeftMenuContainer>
  );
};
