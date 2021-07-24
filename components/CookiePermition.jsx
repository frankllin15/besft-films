import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'


const Container = styled.div`
    position: fixed;
    bottom: 3px;
    width: 94%;
    min-height: 3.4rem;
    display: block;
    border-radius: 8px;
    /* margin: 10px auto ; */
    margin: 3px auto;
    left: 0;
    right: 0;
    justify-self: center;
    background-color: #eee;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 1rem 0; 
    z-index: 2000;
    p {

        color: #14425f;
        font-weight: 600;
    }
`

const Buttom = styled.button`
    min-width: 100px;
    height: 38px;
    padding: 5px;
    border-radius: 14px;
    background-color: #eee;
    border: solid 1px #14425f;
    color: #14425f;
    font-weight: 600;
    /* box-shadow: 10px 8px 18px 3px rgba(0,0,0,0.5); */
    box-shadow: 10px 8px 18px 0px rgba(0,0,0,0.5);
    cursor: pointer;

    :active{
        box-shadow: 10px 8px 18px -7px rgba(0,0,0,0.5);

    }
`



export default function CookiePermition() {

    const [cookiesAllowed, setCokiesAllowed] = React.useState(false)

    useEffect(() => {
        const  storageCookiesAllowed = localStorage.getItem("cookiesAllowed")

        if (storageCookiesAllowed === "true")
            setCokiesAllowed(true)
    }, [])

    const handlleClick = () => {
        localStorage.setItem("cookiesAllowed", "true")
        setCokiesAllowed(true)
    }


    if (!cookiesAllowed) 
        return (
        <Container>
            <p>Esse site utiliza cookies de terceiros para oferecer uma melhor experiencia.</p>
            
            <Buttom onClick={handlleClick}>Tudo bem</Buttom>
        </Container>
    ) 
    else 
        return null
}
