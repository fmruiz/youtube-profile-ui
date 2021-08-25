import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: ${(props) => props.theme.color.gray5};
  width: 100%;
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 20px;
  overflow-y: scroll;

  ::-webkit-scrollbar-track {
    background-color: ${p => p.theme.color.gray5};;
    border-radius: 20px;
    padding-top: 20px;
  }

  ::-webkit-scrollbar {
    background-color: ${p => p.theme.color.gray5};;
    width: 10px;
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.color.gray3};
    border-radius: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
`;

export const ResultVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResultContainer = styled.div`
  padding: 15px 0px;
  display: flex;
  flex-direction: column;
`;
