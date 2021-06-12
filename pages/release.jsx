import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { MainContainer } from '../components/styles'
import { getReleaseMovies } from '../lib/apiTmdb'
import RenderCard from '../components/RenderCard'
import CustomPagination from '../components/CustomPagination'
import { Title } from '../components/styles'


export default function release() {

    const [data, setData] = useState(null)
    const [page, setPage] = useState(1)
    

    useEffect(() => {
        (async () => {
            setData(await getReleaseMovies(page))
        })()
    }, [page])

    

    return (
        <MainContainer>
            <Title>Lançamentos</Title>
        {data ? <>
           <RenderCard list={data.results} media_type="movie"/>
            <CustomPagination page={page} setPage={setPage} maxPage={data.total_pages}/>
            </>
            :
            ""
        }
        </MainContainer>
    )
}


