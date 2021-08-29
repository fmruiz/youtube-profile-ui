import styled from "styled-components";

export const LeftMenuFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterCopyright = styled.p`
  margin: 0px 0px 0px 24px;
  font-size: 12px;
  color: ${(p) => p.theme.color.gray7};
`;
