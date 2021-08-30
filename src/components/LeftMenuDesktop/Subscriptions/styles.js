import styled from "styled-components";

export const SubscriptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubscriptionsTitle = styled.p`
  color: ${(p) => p.theme.color.gray3};
  font-size: ${(p) => p.theme.font.sm2};
  padding: 0px 24px 8px 24px;
  margin: 0;
  font-weight: 700;
`;

export const SubscriptionsBody = styled.div`
  display: flex;
  flex-direction: column;
`;
