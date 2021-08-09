import styled from "styled-components";

export const HeaderContainer = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.color.gray1};
  color: white;
  display: flex;
  height: ${(props) => props.theme.height.mobileHeader};
`;
