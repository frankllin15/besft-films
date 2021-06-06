import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import CustomBootstrapInput from './CustomBootstrapInput'

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px; 
  max-width: 100%;
`


export default function SearchBar() {
  

  const [keyWord, setKeyWord] = useState("")
  const router = useRouter()

  function handleClick(e) {
    console.log(e)
    if (keyWord !== "")
      router.push(`/search/${keyWord}/1`)
  }

  function handleChange(e) {
    e.preventDefault()


    setKeyWord(e.target.value)

  }

  


  return <SearchContainer key="searchbar1">

      <CustomBootstrapInput onKeyDown={e => {if(e.key === "Enter") handleClick(e)}}  value={keyWord} onChange={e => handleChange(e)}/>  
       <Button  onClick={handleClick}>
        <SearchIcon fontSize="large" color="secondary" />
      </Button>
    </SearchContainer>
  
}