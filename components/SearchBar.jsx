import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components'
import { useState } from 'react';
import { useRouter } from 'next/router'
import CustomBootstrapInput from './CustomBootstrapInput'
import IconButton from '@material-ui/core/IconButton';

import * as ga from '../lib/ga'

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 72px;  */
  max-width: 80%;
  position: relative;


`


export default function SearchBar() {
  
  const [keyWord, setKeyWord] = useState("")
  const router = useRouter()

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
    </SearchContainer>
  
}