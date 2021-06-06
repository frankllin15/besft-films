import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { getMediaGenres } from '../lib/apiTmdb';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const NavBarContent = styled.div`
    /* height: 100%; */
    /* display: flex; */
    margin: 0;
    
    flex-direction: row;
    /* justify-content: space-around; */
    align-items: center;
    width: 100%;
    flex: 1;
    flex-grow: 1;
    @media(max-width:480px) {
        &:nth-child(2) {
            display: none;
            /* background-color: red */
        }
    }

    ul {
        display: flex;
        justify-content: space-around;
    }

    li {
        display: inline;
    
    }
    p, a{
        color: #fff;
        &:hover {
            transition: 300ms;
            color: greenyellow;
        }
    }
    a {
        text-decoration: none;
    }
`
const NavBar = styled.nav`
    width: 100%;
    height: 70px;
    background: rgb(28,44,65);
    background: linear-gradient(to right, rgba(28,44,65,1) 0%, #0e5b8b 50%);
    display: flex;

   align-items: center;
    margin-bottom: 20px;
    position: fixed;
    top: 0;
    z-index: 100;

    /* Smart Phones */
    @media(max-width:480px) {
        /* display: none; */
    }
    /* Tablets */
    @media(min-width:600px) {

    }
    /* Desktop */
    @media(min-width:1025px) {

    }
    
`;

const DropDownContent = styled.div`
    display: none;
    /* opacity: 0; */
    background-color: #1c2c41bc;
    color: #080808;
    z-index: 10;
    position: absolute;
    min-width: 100px;
    padding: 12px;
    ul {
        display: flex;
        flex-direction: column;
        padding: 0;
    }
    li {
        margin-bottom: 4px;
    }
`;
const DropDown = styled.div`
   
    a {
        cursor: pointer;
    
    }
    p {
        height: 100%;
        margin: 0;
    }
    color: #c4c4c4;
    :hover {
        ${DropDownContent} {
            transition: 300ms;
            display: block;
      
        }
    }
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
`

export default function Header() {
    const [movieGenres, setMovieGenres] = useState(null)
    const [serieGenres, setSerieGenres] = useState(null)

    useEffect(() => {
        (async () => {
            setMovieGenres([...await getMediaGenres('movie')])
            setSerieGenres([...await getMediaGenres("tv")])
        })()
    },[])

    // console.log(movieGenres)
    // console.log(serieGenres)

    return (
        <NavBar>
            <NavBarContent>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                    <DropDown>
                        <IconContainer>
                        <a>Filmes</a>
                        <ExpandMoreIcon />
                        </IconContainer>
                    <DropDownContent>
                        <ul>
                            {movieGenres ? movieGenres.map((item, id) => (
                                <li key={id}><a href={`/movie/genre/${item.id}`}>{item.name}</a></li>

                            )) : ""}
                    
                        </ul>
                    </DropDownContent>
                </DropDown>
                    </li>
                    <li>
                    <DropDown>
                    <IconContainer>
                        <a>Series</a>
                        <ExpandMoreIcon />
                        </IconContainer>
                    <DropDownContent>
                        <ul>
                            {serieGenres ? serieGenres.map((item, id) => (
                                <li key={id}><a href={`/tv/genre/${item.id}`}>{item.name}</a></li>

                            )) : ""}
                    
                        </ul>
                    </DropDownContent>
                </DropDown>
                    </li>
                    <li>
                        <a href="/">Populares</a>
                    </li>
                </ul>
            </NavBarContent>
            <NavBarContent>
                
            </NavBarContent>
        </NavBar>
    )
}