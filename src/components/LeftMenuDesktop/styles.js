import styled from "styled-components";

export const LeftMenuDesktopContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.gray1};
  width: 230px;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-bottom: 15px;
`;
