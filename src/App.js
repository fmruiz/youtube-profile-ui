import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { ContainerBody } from './styles'
// components
import { Header } from './components/Header/Header'
import { LeftMenu } from './components/LeftMenu/LeftMenu'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <ContainerBody>
        <LeftMenu />
      </ContainerBody>
    </ThemeProvider>
  )
}

