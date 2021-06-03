import Head from 'next/head'
import styled from 'styled-components'
import { getMediaByGenre, getMediaGenres } from '../../../lib/apiTmdb'
import RenderCard from '../../../components/RenderCard'
import {useRouter} from 'next/router'
import { useEffect, useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'


const Container = styled.div`
  padding: 0 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export default function Genre() {
    const router = useRouter()
    const {id, media} = router.query
    const [data, setadata] = useState([])

    useEffect(() => {
        (async () => {
          if(id) {

            const {results} = await getMediaByGenre(media, id)
            setadata(results)
          }
        })()
    }, [id])
    console.log(data)
    if(data)
  return (
    <Container>
      
      <RenderCard list={data} media_type={media}/>
    </Container>
  )

  return (
    <Container>
      <CircularProgress />
    </Container>
  )
}

