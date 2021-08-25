import React from 'react'
import { Albums } from './Albums/Albums'
import { SongDetails } from './SongDetails/SongDetails'
import { MusicMenuContainer } from './styles'
import { YoutuberMusicName } from './YoutuberMusicName/YoutuberMusicName'

export const MusicMenu = () => (
    <MusicMenuContainer>
        <YoutuberMusicName />
        <Albums />
        <SongDetails />
    </MusicMenuContainer>
)
