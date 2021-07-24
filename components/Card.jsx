import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/IconButton';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const HoverRate = styled.div`
   position:  absolute;
   top: 0;
   width: 119px;
    height: 178.5px;
   background-color: #444;
   opacity: 0;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
   z-index: 100;
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

const Item = styled.div`
    /* position: relative; */
    width: 200px;
    margin: 0 12px 0;
    margin-bottom: 1.5rem;
    &:hover{
        transition: 500ms;
        transform: scale(1.04);
        ${HoverRate}{
            transition: 600ms;
            opacity: 1;
            background-color: #4444445c;
        }
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
    color: #fff;
    cursor: default;
    font-size: .8rem;
    text-shadow: 2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.3);

    @media(max-width: 480px) {
        font-size: .7rem;
    }
`
const CircleProgressContainer = styled.div`
    width: 65px;
    height: 65px;

    @media(max-width: 480px) {
        width: 50px;
        height: 50px;
    }
`

export default function Card({id, item, media_type}) {
    const [isImgNotFound, setIsImgNotFound] = useState(false)

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
        <Button style={{padding: 0}} href={`/${item.media_type || media_type}/${item.id}`}> 
        <HoverRate>
            <CircleProgressContainer >

            <CircularProgressbar styles={buildStyles({
                textColor: "#fff",
                textSize: "1.3rem"
            })}  value={Number(item.vote_average)} maxValue={10} text={`${Number(item.vote_average).toFixed(1)}/10`} 
                
                />
            </CircleProgressContainer>
        <Title>{item.title ? item.title: item.name}</Title>
        </HoverRate>
        <Img onError={e => handleImgError(e)} src={isImgNotFound ? require('../public/img/posterNotFound.png') : `https://image.tmdb.org/t/p/w500${item.poster_path}`} />
         </Button>
    </Item>
     
    )
}
