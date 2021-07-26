import React, { useContext } from 'react'
import { createContext } from 'react'

const HistoryContext = createContext()

function SearchHistoryProvider({ children }) {
    const [searchHistory, setSearchHistory] = React.useState([])

    

    return (
        <HistoryContext.Provider value={{searchHistory, setSearchHistory}}>
            
            {children}
        </HistoryContext.Provider>
    )
}

export { HistoryContext, SearchHistoryProvider }

export const useSearchHistoryContext = () => {
    return useContext(HistoryContext)
}

