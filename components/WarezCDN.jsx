import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Logo from '../public/img/warezLogo.png'


const Wrapper = styled.div`

    position: relative;

    max-width: 300px;
    min-height: 70px;
    border-radius: 12px;
    border: solid 1px #78e08f;
    background-color: transparent;
    :hover {
        transition: 400ms;
        background-color: rgb(120,224,143,.1);
    }
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 15px 20px 15px;
    align-items: start;
    text-align: start;
    
    p {
        font-size: .8rem;
        margin: 0;
    }
`

export default function WarezCDN() {
    return (
    
    <a target="_black" style={{textDecoration: "none"}} href="https://warezcdn.com/">

        <Wrapper>
            
            <Image src={Logo}  width="199px" height="29px"   />
            <p>Todo o conteúdo nesse site é promovido pela WAREZCDN. A maior api de filmes, series e animes do mundo.</p>
        </Wrapper>
        </a>
    )
}
