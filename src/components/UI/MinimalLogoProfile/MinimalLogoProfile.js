import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { MinimalLogo, MinimalLogoContainer, MinimalLogoName } from "./styles";
import Logo from "../../../assets/boris.jpg";

export const MinimalLogoProfile = ({name, isVerified}) => (
  <MinimalLogoContainer>
    <MinimalLogo src={Logo} />
    <MinimalLogoName>{name}</MinimalLogoName>
    {isVerified && (<FontAwesomeIcon icon={faCheckCircle} />)}
  </MinimalLogoContainer>
);
