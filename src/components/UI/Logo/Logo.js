import React from 'react'
import styled from "styled-components";

const LogoImg = styled.img`
    ${props => props.borderRadius} {
        border-radius: 50%;
    }
`;

export const Logo = ({source, width}) => <LogoImg src={source} width={width} data-testid={"logo"}/>
