import styled from "styled-components";

export const MainContainer = styled.div`
    background-color: ${(props) => props.theme.color.gray5};
    width: 100%;
    padding-right: 16px;
    padding-left: 16px;
    padding-top: 20px;
    overflow-y: scroll;
`;

export const ResultContainer = styled.div`
    padding: 15px 0px;
    display: flex;
    flex-direction: column;
`;