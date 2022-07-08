import React, { ReactNode } from 'react'
import Footer from './components/Footer'
import Navigation from './components/Nav'
import { createGlobalStyle } from "styled-components"
import colors from './colors'

const GlobalStyle = createGlobalStyle`
  background-color: ${colors.bg};
`

type Props = {
  children: ReactNode
  className?: string
}

function Layout(props: Props) {
  const { children, className } = props

  return (
    <div className={className}>
      <GlobalStyle />
      <Navigation />
      { children }
      <Footer />
    </div>
  )
}

export default Layout