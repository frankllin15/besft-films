import React, { useContext } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { ThemeContext} from './context/ThemeStore'



const GlobalStyle = createGlobalStyle`
    * {
  box-sizing: border-box;
}

body {
  background-image: linear-gradient(135deg, #161f2beb 0%, #1a223bf4 35%, #19284d 100%), url(${props => props.theme.bgImage});
  background-repeat: no-repeat;
  background-size: contain;
  /* background: rgb(22,31,43); */
/* background: linear-gradient(135deg, rgba(22,31,43,1) 0%, rgba(26,34,59,1) 35%, rgba(25,40,77,1) 100%); */
  max-width: 100vw;
  width: 100% ;
  min-height: 120vh;
  
  padding: 0; 
  margin: 0;
  font-family:Verdana;
  font-size: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #c4c4c4;
  /* align-items: center; */
 
 @media(max-width: 480px) {
   font-size: .8em;
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