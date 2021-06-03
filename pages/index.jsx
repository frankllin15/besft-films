import Head from 'next/head'
import styled from 'styled-components'
import RenderCard from '../components/RenderCard'
import MultiCarousel from '../components/MultiCarousel'
import { getTrandingMedia } from '../lib/apiTmdb'

const Container = styled.div`
  padding: 0 2rem 0;
  padding-top: 30px;
`

const Title = styled.h3`
  color: #fff;
  cursor: default;
  font-size: 1.5rem;
`

export default function Home({trendingTv, trendingMovie}) {
    console.log(trendingTv)
  return (
    <>
    <Container>
       <Title>Series em Alta</Title>
      <MultiCarousel key={1} data={trendingTv}/> 
      
      
       <Title>Filmes em Alta</Title>
      <MultiCarousel key={2} data={trendingMovie}/>
    </Container>

    </>
  )
}

export async function getServerSideProps() {
  const trendingTv = await getTrandingMedia('tv')
  const trendingMovie = await getTrandingMedia('movie')
  return {
    props: {
      trendingTv: trendingTv,
      trendingMovie: trendingMovie
    }
  }
}
