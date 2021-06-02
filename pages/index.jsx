import Head from 'next/head'
import styled from 'styled-components'
import RenderCard from '../components/RenderCard'

const Container = styled.div`
  padding: 0 2rem 0;
`

export default function Home({list}) {
  return (
    <Container>
      <Head>Best Films</Head>
      <h1>Filmes</h1>
      <RenderCard list={list}/>
    </Container>
  )
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/trending")
  const json = await res.json()

  return {
    props: {
      list: json.list
    }
  }
}
