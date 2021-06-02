import styled from 'styled-components'

const NavBar = styled.nav`
    width: 100%;
    height: 70px;
    background-color: #1c2c41;
    color: #161f2b;
    /* padding: 5px; */
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    position: fixed;
    top: 0;
    z-index: 100;

    div {
        flex: 1;
    }
    ul {
        display: flex;
        justify-content: space-around;
    }

    li {
        display: inline;
    
    }
    p, a{
        color: #fff;
        &:hover {
            transition: 300ms;
            color: greenyellow;
        }
    }
    a {
        text-decoration: none;
    }
`

export default function Header() {


    return (
        <NavBar>
            <div>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Filmes</a>
                    </li>
                    <li>
                        <a href="/">Series</a>
                    </li>
                    <li>
                        <a href="/">Populares</a>
                    </li>
                </ul>
            </div>
            <div>
                
            </div>
        </NavBar>
    )
}