import React from 'react'
import styled from 'styled-components'
import { getMediaByGenre, getMediaGenres } from '../../../lib/apiTmdb'
import RenderCard from '../../../components/RenderCard'
import {useRouter} from 'next/router'
import { useEffect, useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import CustomPagination from '../../../components/CustomPagination'


const Container = styled.div`
  padding: 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export default function Genre() {
    const router = useRouter()
    const {id, media} = router.query
    const [data, setadata] = useState([])
    const [page, setPage] = React.useState(1);

    useEffect(() => {
        (async () => {
          if(id) {

            const {results, page: maxPage} = await getMediaByGenre(media, id, page)
            setadata({...await getMediaByGenre(media, id, page)})
          }
        })()
    }, [id, page])
    console.log(data)
    if(data.results)
  return (
    <Container>
      
      <RenderCard list={data.results} media_type={media}/>
      <CustomPagination page={page} maxPage={data.total_pages} setPage={setPage}/>
    </Container>
  )

  return (
    <Container>
      <CircularProgress />
    </Container>
  )
}

