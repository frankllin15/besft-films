import styled from 'styled-components'

export const CustomLink = styled.a`
    cursor: pointer;
    color: #d1d0d0;
    font-size: 1.3rem;
    /* margin: 0 8px 0; */
    text-decoration: none;
    &:hover {
        transition: 300ms;
        color: #fff;
    }
    @media(max-width:700px) {
        &:nth-child(n+2)&:nth-child(-n+4) {
            display: none;
        }
    }
`

export const NavBarContent = styled.div`
/* height: 100%; */
display: flex;
margin: 0;

flex-direction: row;
justify-content: space-around;
align-items: center;
width: 100%;
`


export const MainContainer = styled.div`
  padding: 0 2rem 0;
  padding-top: 30px;
  padding: 0 2rem 0;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  min-height: 100vh;

  @media(max-width: 480px) {
    padding: 0;
  }
`

export const Title = styled.h1`
  color: #fff;
  cursor: default;
  font-size: 1.5rem;
  margin-left: 1em;

  @media(max-width: 700px) {
    font-size: 1.2em;
  }
`
