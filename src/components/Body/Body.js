import React from "react";
import MediaQuery from "react-responsive";
import { LeftMenu } from "../LeftMenu/LeftMenu";
import { LeftMenuDesktop } from "../LeftMenuDesktop/LeftMenuDesktop";
import { Main } from "../Main/Main";
import { ContainerBody } from "./styles";

export const Body = () => (
  <ContainerBody>
    <MediaQuery maxWidth={1284}>
      <LeftMenu />
    </MediaQuery>
    <MediaQuery minWidth={1285}>
      <LeftMenuDesktop />
    </MediaQuery>
    <Main />
  </ContainerBody>
);
