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
  background-color:  #161f2b;

  max-width: 100vw;
  width: 100% ;
  /* min-height: 1000px; */
  
  padding: 0; 
  margin: 0;
  font-family:Verdana;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #c4c4c4;
  /* align-items: center; */
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