import styled from "styled-components";

export const YoutuberNameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 4px;
`;

export const YoutuberName = styled.h2`
  color: white;
  font-weight: 400;
  font-size: ${(p) => p.theme.font.sm3};
  margin: 0px 10px 0px 0px;
`;

export const CheckContainer = styled.div`
  color: ${(props) => props.theme.color.gray3};
`;
