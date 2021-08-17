import styled from "styled-components";

export const DividerContainer = styled.div`
  color: ${(props) => props.theme.color.gray3};
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const IconDiv = styled.div``;

export const TitleDivider = styled.span`
  font-size: ${(props) => props.theme.font.sm2};
  font-weight: bold;
  margin-left: 10px;
`;

export const BorderBottom = styled.div`
    border-bottom: 1px solid ${(props) => props.theme.color.gray4};
    padding-top: 5px;
`;
