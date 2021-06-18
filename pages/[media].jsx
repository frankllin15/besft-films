import React from 'react'
import styled from 'styled-components'
import { getMediaByGenre, getMediaGenres } from '../lib/apiTmdb'
import RenderCard from '../components/RenderCard'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import CustomPagination from '../components/CustomPagination'
import CustomSelect from '../components/CustomSelect'
import { Title } from '../components/styles'

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
  flex-wrap: wrap;
  margin: 1em 0 1em;
`

export default function Genre({ genre }) {
    const router = useRouter()
    const { media } = router.query
    const [data, setdata] = useState([])
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState({
        genre: 35,
        order: "desc"
    })

    const handleChange = (e, label) => {
        if(label === 'genre') setPage(1)

        let aux = filter
        aux[label] = e.value
        setFilter({ ...aux })
    }

    useEffect(() => {
        (async () => {

            setdata(await getMediaByGenre(media, page, filter))


        })()
    }, [page, filter])


    // console.log(data)
    // console.log(filter)


    const releaseOptions = [
        { label: "Todos", value: false },
        { label: "2020", value: 2020 },
        { label: "2019", value: 2019 },
        { label: "2019", value: 2019 },
        { label: "2017", value: 2017 },
        { label: "2016", value: 2016 },
        { label: "2015", value: 2015 },
        { label: "2014", value: 2014 }
    ]
    return (
        <Container>
            {data.results ?
                <>
                    <Title>{media == 'tv' ? "Series" : 'Filmes'}</Title>
                    <FilterContainer>
                        <CustomSelect options={genre} name="genre" label="Genero" onchange={handleChange} />
                        <CustomSelect options={releaseOptions} name={media === "tv" ? "first_air_date_year" : "primary_release_year"} label="Lançamento" onchange={handleChange} />
                    </FilterContainer>
                    <RenderCard list={data.results} media_type={media} />
                    <CustomPagination page={page} maxPage={data.total_pages} setPage={setPage} />
                </>
                :
                <CircularProgress />
            }
        </Container>
    )

}

export async function getServerSideProps(ctx) {

    const { media } = ctx.query

    const genres = Array.from(await getMediaGenres(media)).map(e => {
        const { id: value, name: label } = e

        return {
            value,
            label
        }
    })


    return {
        props: {
            genre: genres
        }
    }
}

