import {useRouter} from 'next/router'
import { useEffect, useState } from 'react'

import RenderCard from '../../../components/RenderCard'
import { SearchMult } from '../../../lib/apiTmdb'

export default function Movie() {
    const Router = useRouter()
    const { keyWord, page } = Router.query
    const [list, setList] = useState([])
    

    useEffect(() => {
        (async function () {
            setList(await SearchMult(keyWord, page))
        })() 
    }, [keyWord, page])
    console.log(keyWord, page)
    console.log(list)

    if (keyWord)
    return (
        <>
        {list ? <RenderCard list={list} /> : ""}
        
        </>
    )

    else return ""
}