import styled from "styled-components";

export const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;
  height: 40px;

  :hover {
      background-color: ${p => p.theme.color.gray4};
  }
`;

export const MenuItemLogo = styled.div`
  width: 26px;
  font-size: 20px;
  margin-left: 24px;
  margin-right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuItemText = styled.div`
  font-size: ${(p) => p.theme.font.sm2};
`;
