import React from 'react'
import { Name, NumberOfSuscribers, ProfileContainer, Suscribed, SuscribersContainer } from './styles'

export const ProfileName = () => (
    <ProfileContainer>
        <Name>Ibai</Name>
        <SuscribersContainer>
            <Suscribed>SUSCRIBED</Suscribed>
            <NumberOfSuscribers>6.37M Suscribers</NumberOfSuscribers>
        </SuscribersContainer>
    </ProfileContainer>
)
