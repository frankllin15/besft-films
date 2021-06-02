import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext()

const ThemeStore = ({ children }) => {
    const [bgImage, setBgImage] = useState('https://image.tmdb.org/t/p/w1280/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg')
    // console.log(children)
    return (
        <ThemeContext.Provider value={{ bgImage, setBgImage }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeStore, ThemeContext }
export function useThemeContext() {
    return useContext(ThemeContext)
}