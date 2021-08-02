import { useRouter } from 'next/router'
import { getReleaseMovies } from '../../lib/apiTmdb'
import RenderCard from '../../components/RenderCard'
import CustomPagination from '../../components/CustomPagination'
import { NextSeo } from 'next-seo'

export default function release({ data }) {

    const Router = useRouter()

    function handlePagination(e){
        Router.push(`${e}`)
    } 

    return (
        <div className="flex flex-col ">
            <NextSeo 
                title="Filmes lançados Recentemente"
                description="Os mais novos lançamentos de filmes disponiveis em HD"
            />
            <h1 className="text-2xl text-white text-center">Lançamentos</h1>
        {data ? <>
           <RenderCard list={data.results} media_type="movie"/>
            <CustomPagination page={data.page} setPage={handlePagination} maxPage={data.total_pages}/>
            </>
            :
            ""
        }
        </div>
    )
}

export async function getStaticPaths() {
    const { total_pages } = await getReleaseMovies(1)

    const paths = Array(total_pages).fill(0).map((e, id) => {
        
        return {
            params: {
                page: `${id+1}`
            }
        }
    })
   
    return {
            paths,
            fallback: false
    }
}

export async function getStaticProps({ params }) {

    const data = await getReleaseMovies(params.page)
    
        return {
            props: {
                data
            },
            revalidate: 60 * 60 * 24 * 5
        }
        
}
