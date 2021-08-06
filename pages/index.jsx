import styled from 'styled-components'
import MultiCarousel from '../components/MultiCarousel'
import { getMediaById, getMultipleMediaById, getTrandingMedia } from '../lib/apiTmdb'
import { Title } from '../components/styles'
import Head from 'next/head'
import CookiePermition from '../components/CookiePermition'
import { useEffect } from 'react'
import { useState } from 'react'
import StarRate from '../components/StarRate'
import { NextSeo } from 'next-seo'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';



const MainContainer = styled.div`
  padding: 0 2rem 0;
  padding-top: 30px;

  @media(max-width: 480px) {
    padding: 0;
  }
`

export default function Home({ trendingTv, trendingMovie }) {

  const [watched, setWatched] = useState([])

  useEffect(() => {
    (async() => {
      const watched = JSON.parse(localStorage.getItem("medias_watched"))

      // console.log(watched)
      if (watched) {
        try {


          const data = getMultipleMediaById(watched)

          setWatched(await data)
    

        } catch(e) {
          console.log({error: e})
        }
      }
    })()
  }, [])


  return (
    <>
      <MainContainer>
        <NextSeo 
          title="Best Films"
          description="Os melhores filmes e series online"
          additionalMetaTags={[
            {name: 'robots', content:'index,follow'},
        ]}
        />
      {watched.length > 0 ? 
      <>
      <Title>Vistos recentemente</Title>
      
      <MultiCarousel autoPlay={false} key={0} data={watched} />
      </>
      : ""
    }

        <Title>Series em Alta</Title>
        <MultiCarousel key={1} data={trendingTv} />
        
        <Title>Filmes em Alta</Title>
        <MultiCarousel key={2} data={trendingMovie} />
      </MainContainer>

        <CookiePermition />
        {/* <h1>Oba</h1> */}
    </>
  )
}



export async function getStaticProps() {

  // const trendingTv = await getTrandingMedia('tv')
  // const trendingMovie = await getTrandingMedia('movie')

  // return {
  //   props: {
  //     trendingTv: trendingTv,
  //     trendingMovie: trendingMovie,
  //   },
  //   revalidate: 60 * 60 * 24
  // }


  const client = new ApolloClient({
    uri: process.env.NODE_ENV === "development" ? 'http://localhost:3000/api/graphql/' : 'https://besftfilms.xyz/api/graphql/',
    cache: new InMemoryCache({
      addTypename: false
    }),
  
  });

  const { data: props } = await client.query({
    query: gql`
      query{

        trendingMovie: trendingMedia(media_type: "movie") {
          id
          name
          poster_path
          media_type
          vote_average
        }
        trendingTv: trendingMedia(media_type: "tv") {
          id
          name
          poster_path
          media_type
          vote_average
        }

    }
    `
  });

  return {
      props,
      revalidate: 60 * 60 * 24
  }
}
