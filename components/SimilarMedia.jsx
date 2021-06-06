import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getSimilarMedia } from '../lib/apiTmdb'
import { hourFormat } from '../lib/utils'
import CircularProgress from '@material-ui/core/CircularProgress'

const Container = styled.section`
    display: grid;
    grid-template-columns: 1fr 2fr;
    /* justify-content: center; */
    /* align-items: center; */
    cursor: default;
    /* height: 100px; */
    margin-bottom: 8px;

    dt {
        color: greenyellow;
        margin: 1rem 0 1rem;
    }
    &:hover {
        a{

        transition: 400ms;
        color: greenyellow;
        } 
    }
    p {
        font-size: .8rem;
    }
    hr {
        width: 100%;
    }

    @media(max-width: 480px) {
        display: flex;
        flex-direction: column;
        
        align-items: center;
        /* grid-template-rows: 2fr 1fr; */

        /* margin-bottom: 2px; */
    }
`

const Info = styled.aside`
    display: flex;
    flex-direction: column;

    /* justify-content: start; */
    padding-left: 20px;
`

const Title = styled.h3`
    text-align: start;

    a{
        text-decoration: none;
        color: #c4c4c4;

    }
`
const Img = styled.img`
    border-radius: 4px;
    height: 300px;
    -webkit-box-shadow: 5px 5px 12px 2px rgba(0,0,0,0.51); 
box-shadow: 5px 5px 12px 2px rgba(0,0,0,0.51);

    @media(max-width: 480px) {
        width: 199px;
    }
`

export default function SimilarMedia({list, type}) {

    

    // console.log(list)

    if (list)
    return (
        <>
        {

        Array.from(list).map((item, id) => (
            <Container key={id}>
                <Img src={`https://image.tmdb.org/t/p/w500//${item.poster_path}`} />
                <Info>
                    <Title><a href={`/${type}/${item.id}`}>{item.title ? item.title : item.name}</a></Title>
                    <p>⭐<span style={{color: "#fff"}}>{item.vote_average}/</span>10</p>
                    <p>{item.overview}</p>
                    {/* <hr></hr>
                    <p>Duração: {hourFormat(item.runtime)}</p> */}
                </Info>
            </Container>   

        ))}
        </>


    
    )

    return <CircularProgress />
}
