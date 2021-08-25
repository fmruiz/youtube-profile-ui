import styled from "styled-components";

export const SongDetailsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SongContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SongDetailsTitle = styled.p`
  color: white;
  margin: 0;
  font-size: ${(p) => p.theme.font.sm2};
`;

export const SongDetailsViews = styled.p`
  color: ${(p) => p.theme.color.gray3};
  margin: 10px 0px;
  font-size: 12px;
`;

export const SongDetailsDuration = styled.p`
  color: ${(p) => p.theme.color.gray3};
  margin: 0px;
  font-size: 12px;
`;
