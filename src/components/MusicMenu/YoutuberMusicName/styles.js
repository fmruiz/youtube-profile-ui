import styled from "styled-components";

export const YoutuberMusicNameContainer = styled.div`
  display: flex;
  background-color: ${(p) => p.theme.color.gray6};
  width: 386px;
  border-radius: 4px;
`;

export const YoutuberLogo = styled.img`
    width: 72px;
    border-radius: 50%;
    border: 1px solid white;
    margin: 20px 15px 10px 15px;
`;

export const YoutuberLogoContainer = styled.div`
    
`;

export const YoutuberContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const SimpleText = styled.span`
  color: ${(p) => p.theme.color.gray3};
  font-size: 16px;
  margin: 15px 0px 15px 4px;
`;
