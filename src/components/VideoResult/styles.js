import styled from "styled-components";

export const VideoResultContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const VideoResultTitle = styled.p`
  color: white;
  font-size: ${(p) => p.theme.font.sm3};
  margin: 0;
`;

export const VideoResultQuantity = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.color.gray3};
`;

export const ContainerQuantity = styled.div`
  display: flex;
  align-items: center;
`;
