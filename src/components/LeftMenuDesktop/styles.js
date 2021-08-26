import styled from "styled-components";

export const LeftMenuDesktopContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.gray1};
  width: 250px;
  padding-right: 20px;
  overflow-y: hidden;

  :hover {
    overflow-y: scroll;

    ::-webkit-scrollbar-track {
      background-color: ${(p) => p.theme.color.gray1};
      border-radius: 20px;
      padding-top: 20px;
    }

    ::-webkit-scrollbar {
      background-color: ${(p) => p.theme.color.gray1};
      width: 7px;
      border-radius: 20px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${(p) => p.theme.color.gray3};
      border-radius: 20px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-bottom: 15px;
`;
