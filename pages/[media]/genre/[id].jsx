import React from 'react'
import styled from 'styled-components'
import { getMediaByGenre, getMediaGenres } from '../../../lib/apiTmdb'
import RenderCard from '../../../components/RenderCard'
import {useRouter} from 'next/router'
import { useEffect, useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import CustomPagination from '../../../components/CustomPagination'
import CustomSelect from '../../../components/CustomSelect'

const Container = styled.div`
  padding: 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 1em 0 1em;
`

export default function Genre() {
    const router = useRouter()
    const {id, media} = router.query
    const [data, setadata] = useState([])
    const [page, setPage] = React.useState(1);
    const [filter, setFilter] = useState({})
    const genres = useState()
   

    const handleChange = (e, label) => {
      // console.log(e)
      let aux = filter

      aux[label] = e.value
      setFilter({ ...aux })
  }

    useEffect(() => {
        (async () => {
          if(id) {

            const {results, page: maxPage} = await getMediaByGenre(media, id, page)
            setadata({...await getMediaByGenre(media, id, page)})
          }
        })()
    }, [id, page])
    console.log(filter)

    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]

    if(data.results)
  return (
    <Container>
      <FilterContainer>
        

      </FilterContainer>
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

// export async function getServerSideProps()

