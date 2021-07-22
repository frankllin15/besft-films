import {useRouter} from 'next/router'
import MediaDetails from '../../components/MediaDetails'
import { getDetails, getMediaById, getMediaRecommendations, getMediaVideos, getSimilarMedia } from '../../lib/apiTmdb'
import { NextSeo } from 'next-seo'

export default function Movie({ data, videos, similarMedia, mediaRecommendations }) {
    const Router = useRouter()
    const { media } = Router.query
   
    return (
        <>
        <NextSeo 
            title={(data.title || data.name)}
            description={data.overview}
            facebook = { { 
                appId : '1234567890' , 
              } }
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
        <MediaDetails mediaRecommendations={mediaRecommendations} type={media} data={data} videos={videos} similarMedia={similarMedia}/> 
        </>
    )

   
}

export async function getServerSideProps(ctx) {


    const { media, id } = ctx.query
    const data = { ...await getMediaById(media, id), ...await getDetails(media, id) }
    const videos = [...await getMediaVideos(media, id)||[]]
    const similarMedia = [...await getSimilarMedia(id, media)||[]]
    const mediaRecommendations = [...await getMediaRecommendations(media, id)||[]]
  
    if (data.id)
    return {
        props: {
            data,
            videos,
            similarMedia,
            mediaRecommendations
        }
    }

    else return {
        redirect: {
            permanent: false,
            destination: '/'

        },
        props: {

        }
    }
}
