import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Wrapper =  styled.a`
    background-color: ${props => props.bgColor||"#fff"};
    border-radius: 8px;
    height: 42px;
    min-width: 93px;
    max-width: min-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 3px 8px 3px;
    text-decoration: none;
    margin: 8px 1rem 1rem 0;
    /* margin-right: 12px; */

    
    p {
        color: ${props => props.color||"#eee"};
        display: inline-block;
        font-weight: 600;
        margin-left: 8px;
    }

    :hover {
        transition: 400ms;
        opacity: .8;
    }

`

export default function LinkSosialMedia({ logo, text, bgColor, href, color }) {
    return (
        <Wrapper color={color} href={href} bgColor={bgColor}>
            <Image width="32" height="32" src={logo}/>
            <p>
            {text ? text : ''}
            </p>
        </Wrapper>
    )
}
