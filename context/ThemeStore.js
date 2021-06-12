import React, { useContext, useState } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import json2mq from 'json2mq';

const ThemeContext = React.createContext()

const ThemeStore = ({ children }) => {
    const [bgImage, setBgImage] = useState('https://image.tmdb.org/t/p/w1280/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg')
    const isMediaQuerySm = useMediaQuery(
        json2mq({
          maxWidth: 700,
        })
      )
      const isMediaQueryMd = useMediaQuery(
        json2mq({
          maxWidth: 935,
        })
      )
    // console.log(children)
    return (
        <ThemeContext.Provider value={{ bgImage, setBgImage, isMediaQuerySm, isMediaQueryMd}}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeStore, ThemeContext }
export function useThemeContext() {
    return useContext(ThemeContext)
}