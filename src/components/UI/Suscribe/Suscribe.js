import React from "react";
import styled from "styled-components";

const SuscribeBtn = styled.div`
  align-items: center;
  display: flex;
  color: white;
  background-color: ${(props) => props.theme.color.redWarning};
  border-radius: 2px;
  font-size: ${props => props.theme.font.sm2};
  font-weight: bold;
  justify-content: center;
  padding: 10px 16px;
  margin: 0px 4px;
`;

export const Suscribe = () => <SuscribeBtn>SUBSCRIBE</SuscribeBtn>;
