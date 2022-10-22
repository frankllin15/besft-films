import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.a`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => (props.bgColor)};
    color: ${props => props.color};
    margin: .5rem 1rem .5rem;
    height: 2.5rem;
    min-width: 90px;
    border-radius: .5rem;
    padding: 1rem;

    :hover {
        opacity: .9;
    }
`

const Text = styled.p`
    display: inline-block;
    margin-left: .75rem;
    color: ${props => (props.color || '#fff')};
    font-weight: bold;
`

export default function LinkSocialMedia({ logo, children, bgColor, href, color }) {

    return (
        <Wrapper color={color} bgColor={bgColor} href={href}>
            <img width="32" height="32" src={logo}/>
            <Text color={color}>
                {children}
            </Text>
        </Wrapper>
    )
}
