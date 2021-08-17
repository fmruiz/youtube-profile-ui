import styled from "styled-components";

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const ProfileName = styled.p`
  color: white;
  font-size: ${(props) => props.theme.font.sm3};
  margin: 0;
  padding-bottom: 5px;
`;

export const TextDescription = styled.span`
  color: ${(props) => props.theme.color.gray3};
  font-size: 12px;
  padding-top: 5px;
`;
