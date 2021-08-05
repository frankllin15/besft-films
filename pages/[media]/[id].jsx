import { useRouter } from 'next/router'
import MediaDetails from '../../components/MediaDetails'
import { getDetails, getMediaById, getMediaRecommendations, getMediaVideos, getSimilarMedia, getTrandingMedia } from '../../lib/apiTmdb'
import { NextSeo } from 'next-seo'
import styled from 'styled-components'
import { useEffect } from 'react'
import { getDate } from '../../lib/utils'
import CircularProgress from '@material-ui/core/CircularProgress'


const TagContainer = styled.section`
    max-width: 100%;
    min-height: 100px;
    margin-top: 28px;
    margin-left: 1rem;
`

const Tag = styled.h4`
    margin-right: 4px;
    font-size: .9rem;
    color: #ccc;
    display: inline-block;
    margin: 3px;
    font-weight: 500;

`


export default function Movie({ data, videos, similarMedia, mediaRecommendations }) {
    const Router = useRouter()
    const { media } = Router.query

    const { isFallback} = Router

    // const tags = ["Online", "Dublado", "Legendado", "HD", "Dublado Online", "Dublado Online HD", "Legendado Online", "Legendado Online HD"]
    //     .map(e => `${data.title || data.name} ${e}`)


    
    useEffect(() => {
        
        if (media) {
            
            
            console.log(isFallback)
            // Armazena a media atual no historico do localStorage

            let watched = JSON.parse(window.localStorage.getItem("medias_watched")) || []

            const date = getDate()

            if (!watched?.some(e => e.id == data.id)) {

                watched.unshift({ id: `${data.id}`, media_type: media, name: data.title || data.name, date: date })

                localStorage.setItem("medias_watched", JSON.stringify(watched))

            } else {

                const array_id = watched.findIndex(e => e.id == data.id)
                watched.splice(array_id, 1)

                watched.unshift({ id: `${data.id}`, media_type: media, name: data.title || data.name, date: date })

                localStorage.setItem("medias_watched", JSON.stringify(watched))

            }

            if (watched.length > 15)
                watched.pop()

        }

    })

    if(isFallback) 
        return (
            <div className="flex items-center w-full h-screen justify-center">
                <CircularProgress />
            </div>
        )
        
    

    return (
        <>
            <NextSeo
                title={(data.title || data.name)}
                description={data.overview}
                facebook={{
                    appId: '1234567890',
                }}
                openGraph={{
                    title: (data.title || data.name),
                    description: data.overview,

                    images: [
                        {
                            url: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
                            alt: data.title || data.name,
                            width: 500,
                            height: 750,
                        }
                    ]
                }}
            />
            <MediaDetails mediaRecommendations={mediaRecommendations} type={media} data={data} videos={videos} similarMedia={similarMedia} />

            <TagContainer>
                <h3>Tags:</h3>
                {["Online", "Dublado", "Legendado", "HD", "Dublado Online", "Dublado Online HD", "Legendado Online", "Legendado Online HD"].map((e, id) => (
                    <Tag key={id}>{data.title || data.name} {e}</Tag>
                    
                ))}
            </TagContainer>
        </>
    )



}

export async function getStaticPaths() {
    const trendingTv = await getTrandingMedia('tv')
    const trendingMovie = await getTrandingMedia('movie')

    const paths = await trendingTv.map(e => ({
        params: { media: 'tv', id: `${e.id}` }
    })).concat(trendingMovie.map(e => ({
        params: { media: 'movie', id: `${e.id}` }
    })))

   

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {

    const { media, id } = params


    const data = { ...await getMediaById(media, id), ...await getDetails(media, id) }
    const videos = [...await getMediaVideos(media, id) || []]
    const similarMedia = [...await getSimilarMedia(id, media) || []]
    const mediaRecommendations = [...await getMediaRecommendations(media, id) || []]

    return {
        props: {
            data,
            videos,
            similarMedia,
            mediaRecommendations
        }
    
    }
}

// export async function getServerSideProps(ctx) {

//     const { media, id } = ctx.query


//     const data = { ...await getMediaById(media, id), ...await getDetails(media, id) }
//     const videos = [...await getMediaVideos(media, id) || []]
//     const similarMedia = [...await getSimilarMedia(id, media) || []]
//     const mediaRecommendations = [...await getMediaRecommendations(media, id) || []]

//     if (data.id)
//         return {
//             props: {
//                 data,
//                 videos,
//                 similarMedia,
//                 mediaRecommendations
//             }
//         }

//     else return {
//         redirect: {
//             permanent: false,
//             destination: '/'

//         },
//         props: {

//         }
//     }
// }


