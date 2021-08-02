import RenderCard from '../../../components/RenderCard'
import { getTopRatedTmdb } from '../../../lib/apiTmdb';
import CustomPagination from '../../../components/CustomPagination'
import { useRouter } from 'next/router';
import CustomSelect from '../../../components/CustomSelect'
import { NextSeo } from 'next-seo'


export default function topimdb({ data }) {
    const Router = useRouter()
    const { page, media } = Router.query

    const mediaOptions = [
        { label: 'Filme', value: 'movie' },
        { label: 'Serie', value: 'tv' },
    ]

    function handlePagination(e) {
        Router.push(`/${media}/top-rated/${Number(e)}`)
    }

    function handleMediaChange(e) {
        Router.push(`/${e.value}/top-rated/${page}`)
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <NextSeo
                title={media === "tv" ? "Top Series" : 'Top filmes'}
                description={media === "tv" ? "As series mais bem avaliadas" : "Os filmes mais bem avaliados"}
            />
            <h1 className="text-2xl text-white text-center mb-4">{media === 'tv' ? 'Series mais bem avaliadas' : 'Filmes mais bem avaliados'} </h1>
            <CustomSelect className="self-start" options={mediaOptions} label="Categoria" name="media" onchange={handleMediaChange} />
            <RenderCard list={data.results} media_type={media} />
            <CustomPagination page={Number(page)} maxPage={data.total_pages} setPage={handlePagination} />

        </div>
    )
}

export async function getStaticPaths() {
    const { total_pages: movie_total_pages } = await getTopRatedTmdb('movie', 1)
    const { total_pages: tv_totalPages } = await getTopRatedTmdb('tv', 1)

    const paths = Array(movie_total_pages).fill(0).map((e, id) => {
        return { params: { page: `${id + 1}`, media: 'movie' } }
    }).concat(Array(tv_totalPages).fill(0).map((e, id) => {
        return { params: { page: `${id + 1}`, media: 'tv' } }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    const data = await getTopRatedTmdb(params.media, params.page)

    return {
        props: {
            data: data
        },
        revalidate: 60 * 60 * 24 * 7
    }
}
