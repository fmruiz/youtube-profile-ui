import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { Divider } from '../UI/Divider/Divider'
import { ProfileResultContainer } from './styles'

// FontAwesomeIcons
const filter = <FontAwesomeIcon icon={faSlidersH}/>

export const ProfileResult = () => (
    <ProfileResultContainer>
        <Divider title="FILTERS" icon={filter}/>
        <Divider />
    </ProfileResultContainer>
)
