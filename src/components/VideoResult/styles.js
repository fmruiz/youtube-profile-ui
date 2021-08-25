import styled from "styled-components";

export const VideoResultContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const Dot = styled.span`
    margin: 0px 5px;
`;

export const ContainerQuantity = styled.div`
  color: ${(props) => props.theme.color.gray3};
  display: flex;
  align-items: center;
`;
