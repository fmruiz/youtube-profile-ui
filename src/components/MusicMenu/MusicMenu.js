import React from 'react'
import { Albums } from './Albums/Albums'
import { SongDetails } from './SongDetails/SongDetails'
import { YoutuberMusicName } from './YoutuberMusicName/YoutuberMusicName'
import { MusicMenuContainer } from './styles'

export const MusicMenu = () => (
    <MusicMenuContainer>
        <YoutuberMusicName />
        <Albums />
        <SongDetails />
    </MusicMenuContainer>
)
