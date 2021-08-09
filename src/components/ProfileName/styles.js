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
  color: white;
`;

export const SuscribersContainer = styled.div`
  align-items: center;
  display: flex;
`;

export const Suscribe = styled.p`
  color: ${(props) => props.theme.color.redWarning};
`;

export const Suscribed = styled.p`
  color: gray;
  font-weight: 500;
`;

export const NumberOfSuscribers = styled.p`
  color: ${(props) => props.theme.color.gray2};
`;
