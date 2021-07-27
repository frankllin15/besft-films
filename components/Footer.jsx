import React from 'react'
import styled from 'styled-components'
import WarezCDN from './WarezCDN'
import LinkSocialMedia from './LinkSocialMedia'
import gitHubLogo from '../public/img/GitHub-Mark-Light-32px.png'
import logoLinkedin from '../public/img/logo-linkedin-32px.png'


const Link = styled.a`
    font-size: 1.3em;
    padding: 5px 12px;
    color: #fff;
    border-radius: 8px;
    
    &:hover { 
        transition: 300ms;
        border-radius: 6px 12px;
            color: #fff;
        }
        text-decoration: none;
    
`


export default function Footer() {
    return (
        <footer className="w-full grid grid-row-3 pl-8 pr-8 mt-16" >

            <section className="flex flex-wrap  justify-around mt-4 mb-16">

                <Link className="" href="/movie">Filmes</Link>
                <Link href="/tv">Series</Link>
                <Link href="/movie/top-rated/1">Top IMDB</Link>
                <Link href="/release/1">Lançamentos</Link>
            </section>

            <section className="flex w-full flex-col  sm:flex-row ">

                <div className="flex flex-row mb-4 w-full  justify-between sm:flex-col">

                    <div className="flex justify-start  flex-wrap ">
                        {/* <h3 className="w-full text-lg " >Contate-me :)</h3> */}
                        <LinkSocialMedia href="https://github.com/frankllin15" text="GitHub" logo={gitHubLogo} bgColor="#000" />
                        <LinkSocialMedia href="https://www.linkedin.com/in/frankllin-teixeira-244a9517b/" text="LinkedIn" logo={logoLinkedin} color="#000" bgColor="#fff" />
                    </div>
                    <WarezCDN />
                </div>

            </section>
            <section className="rounded-xl border-green-light p-4 border mb-6">
                <h3 className="text-lg">Aviso Legal</h3>
                <div>

                    <p>
                        O Best Films é uma plataforma absolutamente legal e contém apenas links apontando para outros sites de vídeos, nós não hospedamos nenhum arquivo de mídia (avi, mkv, mpg, mpeg, vob, wmv, flv, mp4, mov, m2v, divx, xvid, 3gp, webm, ogv, ogg) protegido por direitos autorais em nosso servidor, nós apenas fazemos uma busca pelos links através da própria internet e organizamos os vídeos em nossa página de forma facilitada para o usuário.
                    </p>
                </div>
            </section>
            <section className="mb-4 text-center">
                <p>Filmes Online - Assistir Filmes - Assistir Filmes Online Grátis - Series Online - Assistir Series Online - Series Online Grátis - Animes Online - Assistir Anime</p>
            </section>



        </footer>
    )
}
