import React from 'react'
import styled from 'styled-components'

const GridContainer = styled.footer`
    display: grid;
    width: 100%;
    /* grid-template-columns: repeat(2, 1fr); */
    grid-template-rows: 1fr 2fr;
    justify-items: center;
    bottom: 0;
    width: 100%;
    /* min-height: 400px; */
    margin-top: 100px;

    /* @media(max-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    } */
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 18px;
    width: 100%;
    /* max-width: 90%; */

`

const Col = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
  
    max-width: 90%;
`
const Title = styled.h3`
    color: #fff;
    cursor: default;
`
const Link = styled.a`
    font-size: 1.2em;
    color: #fff;
        &:hover {
            transition: 300ms;
            color: #fff;
        }
        text-decoration: none;
        /* margin-bottom: 12px; */
`

export default function Footer() {
    return (
        <GridContainer>
            {/* <Container> */}
            <Row>
                {/* <Title>Navegação</Title> */}
                <Link href="/movie">Filmes</Link>
                <Link href="/tv">Series</Link>
                <Link href="/top-rated">Top IMDB</Link>
                <Link href="/release">Lançamentos</Link>
            </Row>
         
            {/* </Container> */}
            {/* <Container> */}

            <Col>
                <Title>Aviso Legal</Title>
                <p>
                    O Best Films é uma plataforma absolutamente legal e contém apenas links apontando para outros sites de vídeos, nós não hospedamos nenhum arquivo de mídia (avi, mkv, mpg, mpeg, vob, wmv, flv, mp4, mov, m2v, divx, xvid, 3gp, webm, ogv, ogg) protegido por direitos autorais em nosso servidor, nós apenas fazemos uma busca pelos links através da própria internet e organizamos os vídeos em nossa página de forma facilitada para o usuário.
                    </p>
            </Col>
            {/* </Container> */}
           
        </GridContainer>
    )
}
