import React, { useContext } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { ThemeContext } from './context/ThemeStore'

import 'tailwindcss/tailwind.css'


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    color: #c4c4c4;

}

html {
  scroll-behavior: smooth;
}

body {
  background: linear-gradient(189deg, rgba(28,44,65,1) 0%, #0d3853 50%);
  background-repeat: no-repeat;
  background-size: contain;
  max-width: 100vw;
  min-height: 100vh;
  padding: 4rem 0px 0; 
  margin: 0;
  font-size: 1em;
  
  @media(max-width: 480px) {
    font-size: .8em;
  }
  .MuiPaginationItem-root {
    color: #fff;
  }
} 
h1, h2, h3 {

  font-family: 'Gugi', cursive;

}

.carousel-container {
  padding-top: 20px;
  padding-bottom: 20px;

}
`

const Theme = ({ children }) => {
  const { bgImage } = useContext(ThemeContext)

  return (
    <ThemeProvider theme={{ bgImage: bgImage }}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default Theme