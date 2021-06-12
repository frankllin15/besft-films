import React, { Component } from 'react'
import Select from 'react-select'
import styled from 'styled-components';

const Label = styled.label`
  font-size: 1.2em;
  color: #c4c4c4;
`

const stylesOption = {
    control: styles => ({ ...styles, backgroundColor: '#ebebeb' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
     
        return {
          ...styles,
            color: '#2e2e2e',
            cursor: 'pointer', 
           
        };
      },  
    };


export default function CustomSelect({ options, label, onchange, name }) {
    return (
        <div style={{width: '170px'}} >
            <Label htmlFor={name}>{label}</Label>
          <Select id={name} instanceId={name} onChange={e => onchange(e, name)} name={name} style={{width: '170px'}}  styles={stylesOption} options={options} />
        </div>
    )
}
