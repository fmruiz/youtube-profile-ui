import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { CheckContainer, YoutuberName, YoutuberNameContainer } from "./styles";

const Check = <FontAwesomeIcon icon={faCheckCircle} />;

export const YoutuberNameNoImg = () => (
  <YoutuberNameContainer>
    <YoutuberName></YoutuberName>
    <CheckContainer>{Check}</CheckContainer>
  </YoutuberNameContainer>
);
