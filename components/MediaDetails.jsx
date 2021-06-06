import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getMediaById, getDetails, getMediaVideos, getSimilarMedia } from '../lib/apiTmdb'
import TabPanel from './TabPanel'
import { hourFormat } from '../lib/utils'



import { useThemeContext } from '../context/ThemeStore'


const GridContainer = styled.div`
    padding-top: 12px;
    padding-left: 8px;

    @media(max-width:480px) {
        display: grid;
        grid-grid-template-rows: 1fr 2fr 1fr;
        width: 100%;
    }
    /* Tablets */
    @media(min-width:600px) {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        width: 100%;
        }
    /* Desktop */
    @media(min-width:1025px) {

    }
`
const Container = styled.section`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    cursor: default;
    /* height: 3000px; */

    dt {
        color: greenyellow;
        margin: 1rem 0 1rem;
    }

`
const WatchBtn = styled.button`
    background-color: #f50057;
    border-radius: 8px;
    padding: 12px;
    border-style: none;
    border: 0;
    width: 100px;
    font-size: 1rem;
    color: #c4c4c4;
    -webkit-box-shadow: 5px 7px 11px 5px #00000042; 
    box-shadow: 5px 7px 11px 5px #00000042;
    cursor: pointer;
    font-weight: bold;
    margin: 8px auto 8px; 
    &:hover {
        background-color: #cf4072;


    }

    a {
        text-decoration: none;
        color: #c4c4c4
    }

`

const Float = styled.div`
    position: sticky;
    top: 100px;
    margin: 0 auto 0;
    display: flex;
    flex-direction: column;
`

const Img = styled.img`
    border-radius: 8px;
    width: 260px;
    -webkit-box-shadow: 5px 7px 11px 5px rgba(0,0,0,0.67); 
box-shadow: 5px 7px 11px 5px rgba(0,0,0,0.67);

    @media(max-width: 480px) {
        width: 198px;
        margin-top: 12px;
    }
`

export default function MediaDetails({ type, id }) {

    const [data, setData] = useState(null)
    // const [embed, setEmbed] = useState({})
    const [videos, setVideos] = useState(null)
    const [similarMedia, setSimilarMedia] = useState(null)

    const { bgImage, setBgImage } = useThemeContext()
    // console.log(bgImage)


    useEffect(() => {
        (async function () {
            setData({ ...await getMediaById(type, id), ...await getDetails(type, id) })
            setVideos(await getMediaVideos(type, id))
            setSimilarMedia([...await getSimilarMedia(id, type)])
        })()
    }, [id])

    useEffect(() => {
        if (data)
            setBgImage(`https://image.tmdb.org/t/p/w1280//${data.backdrop_path}`)
    }, [data])
    // console.log(embed)
    // console.log(data)
    
    if (data )
    return (
        
        <GridContainer>

                {/* {console.log(data.crew)} */}
                <Container>
                    <Float>
                        <Img src={`https://image.tmdb.org/t/p/w500//${data.poster_path}`} />
                            {/* <WatchBtn ><a target="_black" href={`https://api.obaflix.com/embed/${data.imdb_id || data.external_ids.imdb_id}`}>Assistir</a></WatchBtn> */}
                    </Float>
                </Container>
                <Container>
                    <h1>{data.title ? data.title : data.name} <span style={{ color: '#5e5e5e' }}>({(data.release_date ? data.release_date : data.first_air_date).substring(0, 4)})</span></h1>
                    <TabPanel similarMedia={similarMedia} videos={videos} overview={data.overview} imdb_id={data.imdb_id || data.external_ids.imdb_id} type={type} />

                </Container>
                <Container >
                    <dl> 
                        {data.crew.length > 0 ? 
                        <>
                        <dt>
                        Direção
                    </dt>
                    <dd>
                        {/* {data.crew.filter(e => e.job == "Director")[0].name || ""} */}
                    </dd>
                    </>
                    :
                    ""    
                    }
                        
                        <dt>
                            Elenco
                        </dt>
                        <dd>
                            {data.cast.map((e, id) => (
                                <p key={id}>{e.name}</p>
                            ))}
                        </dd>
                        <dt>
                            Gênero
                        </dt>
                        <dd>
                            {data.genres.filter((e, id) => id < 3).map((e, id) => <p key={id}>{e.name}</p>)}
                        </dd>
                        <dt>
                            Ano de Lançamento
                        </dt>
                        <dd>
                            {(data.release_date ? data.release_date : data.first_air_date).substring(0, 4)}
                        </dd>
                        {
                            data.runtime ?
                                <>
                                    <dt>
                                        Duração
                                    </dt>
                                    <dd>
                                        {hourFormat(data.runtime)}
                                    </dd>
                                </>
                                :
                                ""
                        }

                        <dt>
                            Imdb Rating
                        </dt>
                        <dd>
                            {data.vote_average}
                        </dd>
                    </dl>

                </Container>

            </GridContainer>


        )
    else
        return ""
}
