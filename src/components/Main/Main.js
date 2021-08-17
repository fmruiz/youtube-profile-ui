import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { Divider } from '../UI/Divider/Divider'
import { MainContainer } from './styles'

export const Main = () => {
    const filter = <FontAwesomeIcon icon={faSlidersH}/>

    return (
        <MainContainer>
            <Divider title="FILTERS" icon={filter}/>
        </MainContainer>
    )
}
