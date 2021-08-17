import styled from "styled-components";

export const MainContainer = styled.div`
    background-color: ${(props) => props.theme.color.gray5};
    width: 100%;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 20px;
    overflow-y: scroll;
`;