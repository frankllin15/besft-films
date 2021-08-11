import React, { useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components'


const Container = styled.div`
   
    width: 200px;
    height: 300px;
   
    margin: 0 .4rem 0;
    margin-bottom: 2rem;

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



export default function Card({ item, media_type }) {
    const [isImgNotFound, setIsImgNotFound] = useState(false)

    function handleImgError(e) {

        e.target.onerror = null;
        setIsImgNotFound(true)
    }

    
    return (
        <Container>
            <a href={`/${item.media_type || media_type}/${item.id}`}>

            <div href={`/${item.media_type || media_type}/${item.id}`} className=" transition w-full h-full  duration-400 group transform ease-in-out hover:scale-110 ml-1 mr-1 mb-3 mt-3 m-5">
                <div className="flex flex-col  justify-around items-center shadow-lg bg-gray-500 w-full h-full absolute top-0 z-50 opacity-0 group-hover:transition duration-400 group-hover:opacity-100 group-hover:bg-gray-transparent ">

                    <div className="w-16 h-16 sm:w-12 sm:h-12" >

                        <CircularProgressbar styles={buildStyles({
                            textColor: "#fff",
                            textSize: "1.3rem",
                        })} value={Number(item.vote_average)} maxValue={10} text={`${Number(item.vote_average).toFixed(1)}/10`}
                        />
                    </div>
                    <h3 className="text-center text-white  font-semibold shadow-xl text-base sm:text-md sm:text-sm">{item.title ? item.title : item.name}</h3>
                </div>
                <img  onError={e => handleImgError(e)}  loading='lazy' placeholder="empty" className="rounded-md" layout="fill" src={isImgNotFound ? "/img/posterNotFound.png" : `https://image.tmdb.org/t/p/w500${item.poster_path}`} />
            </div>
            </a>
        </Container>

    )
}
