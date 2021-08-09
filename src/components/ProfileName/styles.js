import styled from "styled-components";

export const ProfileContainer = styled.div`
  background-color: ${(props) => props.theme.color.gray1};
  display: flex;
  flex-direction: column;
  height: ${(props) => props.theme.height.mobileProfile};

  p {
    margin: 0;
  }
`;

export const Name = styled.p`
  color: black;
`;

export const SuscribersContainer = styled.div`
  align-items: center;
  display: flex;
`;

export const Suscribed = styled.p`
  color: gray;
`;

export const NumberOfSuscribers = styled.p`
  color: ${(props) => props.theme.color.gray2};
`;
