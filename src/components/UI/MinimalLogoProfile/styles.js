import styled from "styled-components";

export const MinimalLogoContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.color.gray3};
`;

export const MinimalLogo = styled.img`
    width: 24px;
    border-radius: 50%;
`;

export const MinimalLogoName = styled.h2`
  font-size: 12px;
  font-weight: 400;
  margin: 0px 5px;
`;
