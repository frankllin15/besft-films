import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components'
import { useState } from 'react';
import { useRouter } from 'next/router'
import CustomBootstrapInput from './CustomBootstrapInput'
import IconButton from '@material-ui/core/IconButton';

import * as ga from '../lib/ga'
import { useEffect } from 'react';
import { useSearchHistoryContext } from '../context/SearchHistoryContext';


const Sugestions = styled.ul`
  background-color: #eee;
  width: 200px;
  min-height: 30px;
  position: absolute;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 40px 10px;
  top: 100%;
  left: 0;
  list-style: none;
  display: none;
`
const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 72px;  */
  max-width: 80%;
  position: relative;

  :focus {
    background-color: red;
      ${Sugestions} {
        display: block;
      }
  }
`

const SugestItem = styled.li`
  text-align: start;
  color: #000;
  margin-bottom: 4px;

`

export default function SearchBar() {
  
  const [keyWord, setKeyWord] = useState("")
  const router = useRouter()

  const { searchHistory, setSearchHistory } = useSearchHistoryContext()



  useEffect(() => {
    
    const storageSearchHistory = localStorage.getItem("search_history")

    if (storageSearchHistory)
      setSearchHistory(JSON.parse(storageSearchHistory))

    }, [])
    
    

  const getSugestions = () => {

     return  searchHistory.filter(word => word.match(`^${keyWord.toLocaleLowerCase()}`) && keyWord !=="")

    
  }

  const searchGa = () => {
    ga.event({
      action: "search",
      params : {
        search_term: keyWord
      }
    })
  }

  function handleClick() {

    if (keyWord !== "") {

      if (!searchHistory.includes(keyWord)) {
        let aux = searchHistory

        aux.push(keyWord.toLocaleLowerCase())

        localStorage.setItem("search_history", JSON.stringify(aux))
        setSearchHistory(aux)

      }

      searchGa()
      router.push(`/search/${keyWord}`)
    }

  }

  function handleChange(e) {
    e.preventDefault()

    setKeyWord(e.target.value)

  }

  

  return <SearchContainer key="searchbar1">

      <CustomBootstrapInput  onKeyDown={e => {if(e.key === "Enter") handleClick()}}  value={keyWord} onChange={e => handleChange(e)}/>  
       <IconButton style={{padding: "8px"}}  onClick={handleClick}>
        <SearchIcon fontSize="medium" color="secondary" />
      </IconButton>
      {getSugestions().length?
      <Sugestions>
        {getSugestions().map((item, id) => (
          <SugestItem key={id}>{item}</SugestItem>
          ))}
      </Sugestions>
      :""
        }
    </SearchContainer>
  
}