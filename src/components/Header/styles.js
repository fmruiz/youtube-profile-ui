import styled from "styled-components";

export const HeaderContainer = styled.div`
  /* position: fixed; */
  /* width: 100vw; */
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.color.gray1};
  align-items: center;
  color: white;
  display: flex;
  height: 5.5vh;
  justify-content: space-between;
  padding-right: 20px;
  padding-left: 20px;
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

export const LeftSection = styled.div`
  cursor: pointer;
  display: flex;
  padding-left: 5px;
`;

export const RightSection = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  width: 20%;
  @media (min-width: 1310px) {
    width: 10%;
  }
`;

export const IconsDiv = styled.div``;

export const ImgUser = styled.img`
  border-radius: 50%;
  width: 32px;
`;
