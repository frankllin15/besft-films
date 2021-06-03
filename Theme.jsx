import React, { useContext } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { ThemeContext} from './context/ThemeStore'



const GlobalStyle = createGlobalStyle`
    * {
  box-sizing: border-box;
}

body {
  background-image: linear-gradient(to bottom, #273f5e45, #161f2b), url(${props => props.theme.bgImage});
  background-repeat: no-repeat;
  background-size: contain;
  background: rgb(22,31,43);
background: linear-gradient(135deg, rgba(22,31,43,1) 0%, rgba(26,34,59,1) 35%, rgba(25,40,77,1) 100%);
  max-width: 100vw;
  width: 100% ;
  min-height: 120vh;
  
  padding: 0; 
  margin: 0;
  font-family:Verdana;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #c4c4c4;
  /* align-items: center; */
  svg {
    fill: white;
  }
}

.carousel-container {
  padding-top: 20px;
}
`

const Theme = ({ children }) => {
    const { bgImage } = useContext(ThemeContext)
    // console.log(children)
    return (
        <ThemeProvider theme={{bgImage: bgImage}}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    )
}

export default Theme