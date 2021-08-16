import styled from "styled-components";

export const LeftMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.gray1};
  height: 100vh;
  width: ${(props) => props.theme.width.LeftMenu};
`;

export const ContainerItemMenus = styled.div`
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ItemMenu = styled.div`
  color: ${(props) => props.theme.color.gray3};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
`;

export const TextMenu = styled.span`
  font-size: ${(props) => props.theme.font.sm};
  padding-top: 4px;
`;
