import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
// components
import { Header } from './components/Header/Header'
import { Banner } from './components/Banner/Banner'
import { ProfileName } from './components/ProfileName/ProfileName'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Banner />
      <ProfileName />
    </ThemeProvider>
  )
}

