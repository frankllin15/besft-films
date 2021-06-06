import Head from 'next/head'
import styled from 'styled-components'
import MultiCarousel from '../components/MultiCarousel'
import { getTrandingMedia } from '../lib/apiTmdb'


const Container = styled.div`
  padding: 0 2rem 0;
  padding-top: 30px;

  @media(max-width: 480px) {
    padding: 0;
  }
`

const Title = styled.h3`
  color: #fff;
  cursor: default;
  font-size: 1.5rem;
`

export default function Home({trendingTv, trendingMovie}) {
   
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

// export async function getServerSideProps() {
//   const trendingTv = await getTrandingMedia('tv')
//   const trendingMovie = await getTrandingMedia('movie')
//   return {
//     props: {
//       trendingTv: trendingTv,
//       trendingMovie: trendingMovie,
//       BASE_API: process.env.BASE_API || "!"
//     }
//   }
// }

export async function getStaticProps() {


  const trendingTv = await getTrandingMedia('tv')
  const trendingMovie = await getTrandingMedia('movie')
  return {
    props: {
      trendingTv: trendingTv,
      trendingMovie: trendingMovie,
    },  
    revalidate: 60 * 60 * 24
  }
}
