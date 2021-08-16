import styled from "styled-components";

export const HeaderContainer = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.color.gray1};
  color: white;
  display: flex;
  height: ${(props) => props.theme.height.Header} !important;
`;

export const MicrophoneContainer = styled.div`
  background-color: ${(props) => props.theme.color.gray5};
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  width: 38px;
`;
