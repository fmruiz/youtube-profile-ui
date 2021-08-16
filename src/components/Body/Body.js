import React from 'react'
import { LeftMenu } from '../LeftMenu/LeftMenu'
import { Main } from '../Main/Main'
import { ContainerBody } from './styles'

export const Body = () => (
    <ContainerBody>
        <LeftMenu />
        <Main />
    </ContainerBody>
)