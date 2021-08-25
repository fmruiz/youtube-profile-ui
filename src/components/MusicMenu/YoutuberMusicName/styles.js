import styled from "styled-components";

export const YoutuberMusicNameContainer = styled.div`
  display: flex;
  background-color: ${(p) => p.theme.color.gray6};
  width: 100%;
  border-radius: 4px;
`;

export const YoutuberLogo = styled.img`
    width: 72px;
    border-radius: 50%;
    border: 1px solid white;
    margin: 10px 10px 10px;
`;

export const YoutuberContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SimpleText = styled.span`
  color: ${(p) => p.theme.color.gray3};
  font-size: 16px;
`;
