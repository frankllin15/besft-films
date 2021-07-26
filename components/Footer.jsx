import React from 'react'
import styled from 'styled-components'
import WarezCDN from './WarezCDN'
import LinkSosialMedia from './LinkSosialMedia'
import gitHubLogo from '../public/img/GitHub-Mark-Light-32px.png'
import logoLinkedin from '../public/img/logo-linkedin-32px.png'

const GridContainer = styled.footer`
    display: grid;
    width: 100%;
    grid-template-rows: 1fr 3fr;
    justify-items: center;
    bottom: 0;
    width: 100%;
    min-height: 400px;
    /* margin-top: 20px; */

    
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 12px;
    width: 100%;
    flex-wrap: wrap;

  

`




const Col = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    height: 100%;
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
    
`



export default function Footer() {
    return (
        <GridContainer>

            <Row>

                <Link href="/movie">Filmes</Link>
                <Link href="/tv">Series</Link>
                <Link href="/movie/top-rated/1">Top IMDB</Link>
                <Link href="/release/1">Lançamentos</Link>
            </Row>

            <Row>

                <Col style={{flex: 3}}>
                    
                    <Title>Aviso Legal</Title>
                        <div>

                        <p>
                            O Best Films é uma plataforma absolutamente legal e contém apenas links apontando para outros sites de vídeos, nós não hospedamos nenhum arquivo de mídia (avi, mkv, mpg, mpeg, vob, wmv, flv, mp4, mov, m2v, divx, xvid, 3gp, webm, ogv, ogg) protegido por direitos autorais em nosso servidor, nós apenas fazemos uma busca pelos links através da própria internet e organizamos os vídeos em nossa página de forma facilitada para o usuário.
                        </p>
                        </div>
                        <WarezCDN />

                
                </Col>
                <Col style={{flex: 1}}>
                        <Title>Contato</Title>
                        
                        <LinkSosialMedia href="https://github.com/frankllin15" text="GitHub" logo={gitHubLogo} bgColor="#000"/>
                        <LinkSosialMedia href="https://www.linkedin.com/in/frankllin-teixeira-244a9517b/" text="LinkedIn" logo={logoLinkedin} color="#000" bgColor="#fff"/>
                
                </Col>

            </Row>
            <Col>
                <p>Filmes Online - Assistir Filmes - Assistir Filmes Online Grátis - Series Online - Assistir Series Online - Series Online Grátis - Animes Online - Assistir Anime</p>
            </Col>

            <div className="h-10 w-10 bg-red-800 +" >
                asdsad
            </div>

        </GridContainer>
    )
}
