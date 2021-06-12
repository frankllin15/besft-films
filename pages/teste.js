import React, { useState } from 'react'
import CustomSelect from '../components/CustomSelect'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

export default function Teste() {
    const [filter, setFilter] = useState({})

    const handleChange = (e, label) => {
        console.log(e)
        let aux = filter

        aux[label] = e.value
        setFilter({ ...aux })
    }

    console.log(filter)

    return (
        <>
        <CustomSelect options={options} label="Data" onchange={handleChange} />
        <CustomSelect options={options} label="Genero" onchange={handleChange} />

        </>
    
    )
}
