import React, { useEffect, useState } from 'react'
import { MainContainer } from '../components/styles'
import RenderCard from '../components/RenderCard'
import { getTopRatedTmdb } from '../lib/apiTmdb';
import CustomPagination from '../components/CustomPagination'
import { useRouter } from 'next/router';
import CustomSelect from '../components/CustomSelect'
import { Title } from '../components/styles'
import styled from 'styled-components';

const ContentAlignStart = styled.div`
    align-self: flex-start;
`

export default function topimdb() {
    const Router = useRouter()
    // const { media } = Router.query
    const [page, setPage] = useState(1);
    const [data, setData] = useState(null)
    const [media, setMedia] = useState('movie')
    

    useEffect(() => {
        (async function () {
            
            setData(await getTopRatedTmdb(media , page))
        })() 
    }, [page, media])
    // console.log(data)
    // console.log(list)

    const mediaOptions = [
        {label: 'Filme', value: 'movie'},
        {label: 'Serie', value: 'tv'},
    ]

    function handleChange (e) {
        setMedia(e.value)
    }

    if (data)
    return (
        <MainContainer>
            <Title>{media === 'tv'?'Series mais bem avaliadas':'Filmes mais bem avaliados'} </Title>
            <ContentAlignStart>

            <CustomSelect options={mediaOptions} label="Categoria" name="media" onchange={handleChange}/>
            </ContentAlignStart>
    
            <RenderCard list={data.results} media_type={media}/>
            <CustomPagination page={page} maxPage={data.total_pages} setPage={setPage}/>
        </MainContainer>
    )

    else return ""

    
}

export async function getServerSideProps(ctx) {

    return {
        props: {

        }
    }
}
