import React, { useEffect } from 'react'
import styled from 'styled-components'
import TabPanel from './TabPanel'
import MultiCarousel from './MultiCarousel'
import { Title } from './styles'
import { useThemeContext } from '../context/ThemeStore'

import { hourFormat } from '../lib/utils'
import StarRate from './StarRate'
import Cast from './Cast'


const ImgBg = styled.div`
  position: absolute;
  top: 0;
  background: linear-gradient(
0deg
,#130b1a 0,rgba(19,11,26,.84) 25%,rgba(19,11,26,.66) 38%,rgba(7,6,10,.61) 58%,rgba(11,7,21,.76) 100%), url(${props => props.bgImage})  no-repeat center top ;
  /* opacity: .6; */
  background-repeat: no-repeat;
  background-size: cover;
  /* margin: ; */
  width: 100%;
  height: 100vh;
  margin-top: 4em;
  z-index: -1;


`


export default function MediaDetails({ data, videos, similarMedia, type, mediaRecommendations }) {

    const { bgImage, setBgImage } = useThemeContext()

    useEffect(() => {
        if (data)
            setBgImage(`https://image.tmdb.org/t/p/w1280//${data.backdrop_path}`)
    }, [data])


    return (

        <div className="flex  mt-6  flex-col">
            <ImgBg bgImage={bgImage} />
            <main className="grid grid-cols-300px-1 mb-4  2md:grid-rows-300-1 2md:justify-items-center 2md:grid-cols-1" >
                <div className="rounded-lg max-h-300 max-w-200 relative w-60 ml-auto mr-auto  shadow-lg">
                    <img layout='fill' className="rounded-lg " priority="true" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
                </div>

                <section className="flex flex-col ml-6 2md:ml-0 pt-4  max-w-3xl min-h-360 justify-start items-start cursor-default">
                    <h1 className="text-4xl ml-2 mr-2 mb-4 sm:text-4xl font-semibold  text-white">{data.title ? data.title : data.name} </h1>
                    <div className="flex font-semibold text-base  ml-2 mb-3 justify-around ">
                        <span className="mr-3">

                            {(data.release_date || data.first_air_date).substring(0, 4)}
                        </span>
                        {
                            data.runtime &&
                            <span className="mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {hourFormat(data.runtime)}
                            </span>

                        }
                        {
                            data.vote_average &&
                            <span className="">
                                <StarRate rate={data.vote_average} />
                            </span>
                        }

                    </div>
                    <div>
                        <Cast data={data.cast} />
                    </div>
                    <p className="text-md mb-4 text-white mr-2 ml-2">{data.overview}</p>

                    <TabPanel similarMedia={similarMedia} videos={videos} data={data} imdb_id={data.imdb_id || data.external_ids.imdb_id} type={type} />


                </section>
            </main>

            {
                mediaRecommendations.length > 0 &&
                <div className="pl-3 pr-3">
                    <Title>Talvez você goste</Title>
                    <MultiCarousel data={mediaRecommendations} />
                </div>

            }
            {
                similarMedia.length > 0 &&
                <div className="pl-3 pr-3">
                    <Title>Similares</Title>
                    <MultiCarousel data={similarMedia} type={type} />
                </div>
            }
        </div>

    )

}
