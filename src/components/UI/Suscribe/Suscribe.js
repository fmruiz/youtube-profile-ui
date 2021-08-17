import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const SuscribeBtn = styled.div`
  align-items: center;
  display: flex;
  color: white;
  background-color: ${(props) => props.theme.color.redWarning};
  border-radius: 2px;
  font-size: ${(props) => props.theme.font.sm2};
  font-weight: bold;
  justify-content: center;
  padding: 10px 16px;
  margin: 0px 4px;
`;

const SuscribedBtn = styled.div`
  align-items: center;
  display: flex;
  color: ${(props) => props.theme.color.gray3};
  background-color: ${(props) => props.theme.color.gray2};
  border-radius: 2px;
  font-size: ${(props) => props.theme.font.sm2};
  font-weight: bold;
  justify-content: center;
  padding: 10px 16px;
  margin: 0px 4px;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
`;

const IconDiv = styled.div`
    color: ${(props) => props.theme.color.gray3};
    font-size: 21px;
    margin-left: 10px;
`;

// FontAwesomeIcon
const bell = <FontAwesomeIcon icon={faBell} />;

export const Suscribe = ({ isSuscribed }) => (
  <>
    {isSuscribed ? (
      <SuscribeBtn>SUBSCRIBE</SuscribeBtn>
    ) : (
      <Container>
        <SuscribedBtn>SUBSCRIBED</SuscribedBtn>
        <IconDiv>{bell}</IconDiv>
      </Container>
    )}
  </>
);
