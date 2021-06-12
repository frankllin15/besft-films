import React, { useState } from 'react'
import styled from 'styled-components'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CustomLink } from './styles';
import { useThemeContext } from '../context/ThemeStore';



const DropDownContent = styled.div`
    display: none;
    /* opacity: 0; */
    color: #080808;
    z-index: 10;
    /* position: absolute; */
    min-width: 100px;
    padding: 12px;
    /* justify-content: center; */
    ul {
        display: flex;
        flex-direction: column;
        padding: 0;
        justify-content: center;
    }
    li {
        margin-bottom: 4px;
        list-style: none;
        
    }
   
`;
const DropDownContainer = styled.div`
    /* background-color: red; */
   width: 100%;
   /* padding: .9em 0 .9em; */
    
    li {
        /* height: 100%; */
        margin-bottom: 12px;
    }
    
    ${DropDownContent} {
        transition: 300ms;
        display: ${props => props.open ? 'block' : 'none'};
      
    }
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: center; */
    
`

export default function DropDown({ label, list, type}) {
    const [open, setOpen] = useState(false)
    const {isMediaQuerySm } = useThemeContext()


    // console.log(isMediaQuerySm)

    return (
        <DropDownContainer open={open}>
            <IconContainer onClick={() => setOpen(!open)}>
                <CustomLink>{label}</CustomLink>
                <ExpandMoreIcon />
            </IconContainer>
            <DropDownContent>
                <ul>
                    {list ? list.map((item, id) => (
                        <li key={id}><CustomLink href={`/${type}/genre/${item.id}`}>{item.name}</CustomLink></li>

                    )) : ""}

                </ul>
            </DropDownContent>
        </DropDownContainer>
    )
}
