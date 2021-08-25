import styled from "styled-components";

export const SongDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 386px;
  justify-content: space-between;
  border-bottom: 1px solid ${p => p.theme.color.gray2};
`;

export const SongContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
`;

export const SongDetailsTitle = styled.p`
  color: white;
  margin: 0;
  font-size: ${(p) => p.theme.font.sm2};
`;

export const SongDetailsViews = styled.p`
  color: ${(p) => p.theme.color.gray3};
  font-size: 12px;
  margin: 8px 0px 0px 0px;
`;

export const SongDetailsDuration = styled.p`
  color: ${(p) => p.theme.color.gray3};
  margin: 0px;
  font-size: 12px;
`;
