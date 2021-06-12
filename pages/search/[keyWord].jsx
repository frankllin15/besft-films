import {useRouter} from 'next/router'
import { useEffect, useState } from 'react'
import RenderCard from '../../components/RenderCard'
import CustomPagination from '../../components/CustomPagination'
import { SearchMult } from '../../lib/apiTmdb'
import { MainContainer } from '../../components/styles'


export default function Movie() {
    const Router = useRouter()
    const { keyWord } = Router.query
    const [data, setData] = useState(null)

    const [page, setPage] = useState(1);
    

    useEffect(() => {
        (async function () {
            setData({...await SearchMult(keyWord, page)})
        })() 
    }, [keyWord, page])
    // console.log(keyWord, page)
    // console.log(data)

    if (data)
        return (
            <MainContainer>
        <RenderCard list={data.results} />
            <CustomPagination page={page} maxPage={data.total_pages} setPage={setPage}/>
            
            </MainContainer>
        )
    return <h1>Wait</h1>

  
}