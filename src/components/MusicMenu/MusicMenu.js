import React from 'react'
import { SongDetails } from './SongDetails/SongDetails'
import { MusicMenuContainer } from './styles'
import { YoutuberMusicName } from './YoutuberMusicName/YoutuberMusicName'

export const MusicMenu = () => (
    <MusicMenuContainer>
        <YoutuberMusicName />
        <SongDetails />
    </MusicMenuContainer>
)
