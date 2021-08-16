import styled from "styled-components";

export const HeaderContainer = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.color.gray1};
  color: white;
  display: flex;
  height: ${(props) => props.theme.height.Header} !important;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
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

export const RightSection = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 9%;
`;

export const IconsDiv = styled.div``;

export const ImgUser = styled.img`
  border-radius: 50%;
  width: 32px;
`;
