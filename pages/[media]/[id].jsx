import {useRouter} from 'next/router'
import MediaDetails from '../../components/MediaDetails'
import { getDetails, getMediaById, getMediaRecommendations, getMediaVideos, getSimilarMedia } from '../../lib/apiTmdb'


export default function Movie({ data, videos, similarMedia, mediaRecommendations }) {
    const Router = useRouter()
    const { media } = Router.query
    if (media)
    return (
        <MediaDetails mediaRecommendations={mediaRecommendations} type={media} data={data} videos={videos} similarMedia={similarMedia}/> 
    )

    else return ""
}

export async function getServerSideProps(ctx) {


    const { media, id } = ctx.query
    const data = { ...await getMediaById(media, id), ...await getDetails(media, id) }
    const videos = [...await getMediaVideos(media, id)]
    const similarMedia = [...await getSimilarMedia(id, media)]
    const mediaRecommendations = [...await getMediaRecommendations(media, id)]

    return {
        props: {
            data,
            videos,
            similarMedia,
            mediaRecommendations
        }
    }
}
