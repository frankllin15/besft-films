import styled from 'styled-components'
import MultiCarousel from '../components/MultiCarousel'
import { getTrandingMedia } from '../lib/apiTmdb'
import { Title } from '../components/styles'
import Head from 'next/head'


const MainContainer = styled.div`
  padding: 0 2rem 0;
  padding-top: 30px;

  @media(max-width: 480px) {
    padding: 0;
  }
`

export default function Home({ trendingTv, trendingMovie }) {

  return (
    <>
    {/* <Head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8693241372934547" 
            crossorigin="anonymous"></script>
    </Head> */}
      <MainContainer>

        <Title>Series em Alta</Title>
        <MultiCarousel key={1} data={trendingTv} />
        
        <Title>Filmes em Alta</Title>
        <MultiCarousel key={2} data={trendingMovie} />

      </MainContainer>

    </>
  )
}



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
