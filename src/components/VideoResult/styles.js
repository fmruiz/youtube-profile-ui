import styled from "styled-components";

export const VideoResultContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionCenter = styled.div`
  padding: 12px 0px;
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

export const DescriptionText = styled.p`
  font-size: 12px;
  margin: 0px 0px 8px 0px;
  color: ${(props) => props.theme.color.gray3};
`;
