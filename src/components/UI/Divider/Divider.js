import React from "react";
import {
  BorderBottom,
  DividerContainer,
  IconDiv,
  TitleContainer,
  TitleDivider,
} from "./styles";

export const Divider = ({ title, icon }) => (
  <DividerContainer data-testid={"divider"}>
    {title || icon ? (
      <TitleContainer>
        <IconDiv>{icon}</IconDiv>
        <TitleDivider>{title}</TitleDivider>
      </TitleContainer>
    ) : null}
    <BorderBottom />
  </DividerContainer>
);
