import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
// components
import { Header } from './components/Header/Header'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  )
}

