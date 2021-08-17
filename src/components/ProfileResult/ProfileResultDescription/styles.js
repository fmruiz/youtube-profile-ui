import styled from "styled-components";

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 16px;
  padding-bottom: 16px;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const ProfileNameContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileName = styled.p`
  color: white;
  font-size: ${(props) => props.theme.font.sm3};
  margin: 0;
  padding-bottom: 5px;
  padding-right: 7px;
`;

export const IconDiv = styled.div`
    color: ${(props) => props.theme.color.gray3};
`;

export const TextDescription = styled.span`
  color: ${(props) => props.theme.color.gray3};
  font-size: 12px;
  padding-top: 5px;
`;
