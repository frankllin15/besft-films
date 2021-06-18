import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/IconButton';

const Item = styled.div`
    width: 200px;
    margin: 0 12px 0;
    &:hover{
        transition: 400ms;
        transform: scale(1.04);
    }

    @media(max-width: 480px) {
        width: 100px;
    }
   
`
const Img = styled.img`
    border-radius: 4px;
    width: 200px;
    /* height: 300px; */
    -webkit-box-shadow: 5px 5px 12px 2px rgba(0,0,0,0.51); 
    box-shadow: 5px 5px 12px 2px rgba(0,0,0,0.51);
    @media(max-width: 415px) {
            width: 99px;
            height: 148.5px;
        }
    @media(min-width: 416px) {
    width: 119px;
    height: 178.5px;
    }
    @media(min-width: 600px) {
        width: 165px;
        height: 247.5px;
    }
    @media(min-width: 850px) {
        width: 200px;
        height: 300px;
    }
        
 
    
`
const Title = styled.h3`
    text-align: center;
    color: #c4c4c4;
    cursor: default;

    @media(max-width: 480px) {
        font-size: .8rem;
    }
`

export default function Card({id, item, media_type}) {
    const [isImgNotFount, setIsImgNotFound] = useState(false)

    function handleImgError(e) {
        
        e.target.onerror = null; 
        setIsImgNotFound(true)
    }

    // reenderiza a pagina quando o item muda; obtivo: atualizar o src da imagem
    useEffect(() => {
        setIsImgNotFound(false)
    }, [item])

    return (
      
        
        <Item >
        <Button href={`/${item.media_type || media_type}/${item.id}`}> 
        <Img onError={e => handleImgError(e)} src={isImgNotFount ? require('../public/img/posterNotFound.png') : `https://image.tmdb.org/t/p/w500${item.poster_path}`} />
         </Button>
        <Title>{item.title ? item.title: item.name}</Title>
    </Item>
     
    )
}
