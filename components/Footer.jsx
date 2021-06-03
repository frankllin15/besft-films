import React from 'react'
import styled from 'styled-components'

const GridContainer = styled.footer`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    bottom: 0;
    width: 100%;
    height: 400px;
    margin-top: 100px;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px;
    
`
const Title = styled.h3`
    color: #fff;
    cursor: default;
`
const Link = styled.a`
    color: #c4c4c4;
        &:hover {
            transition: 300ms;
            color: greenyellow;
        }
        text-decoration: none;
        margin-bottom: 12px;
`

export default function Footer() {
    return (
        <GridContainer>
            <Container>
                <Title>Navegação</Title>
                <Link href="/movies">Filmes</Link>
                <Link href="/tv">Series</Link>
                <Link href="/movies">Top IMDB</Link>
                <Link href="/movies">Lançamentos</Link>
            </Container>
            <Container>
            <Title>Conta</Title>
                <Link href="/movies">Filmes</Link>
                <Link href="/tv">Series</Link>
                <Link href="/movies">Top IMDB</Link>
                <Link href="/movies">Lançamentos</Link>
            </Container>
            <Container>
            <Title>Legal</Title>
                <Link href="/movies">Filmes</Link>
                <Link href="/tv">Series</Link>
                <Link href="/movies">Top IMDB</Link>
                <Link href="/movies">Lançamentos</Link>
            </Container>
            <Container>
            <Title>Redes</Title>
                <Link href="/movies">Filmes</Link>
                <Link href="/tv">Series</Link>
                <Link href="/movies">Top IMDB</Link>
                <Link href="/movies">Lançamentos</Link>
            </Container>

        </GridContainer>
    )
}
