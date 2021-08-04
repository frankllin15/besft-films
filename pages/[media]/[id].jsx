import { useRouter } from 'next/router'
import MediaDetails from '../../components/MediaDetails'
import { getDetails, getMediaById, getMediaRecommendations, getMediaVideos, getSimilarMedia } from '../../lib/apiTmdb'
import { NextSeo } from 'next-seo'
import styled from 'styled-components'
import { useEffect } from 'react'
import { getDate } from '../../lib/utils'
import Cookies from 'cookies'
import cookieCutter from 'cookie-cutter'

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

    const tags = ["Online", "Dublado", "Legendado", "HD", "Dublado Online", "Dublado Online HD", "Legendado Online", "Legendado Online HD"]
        .map(e => `${data.title || data.name} ${e}`)


    useEffect(() => {

        if (media) {

                // Armazena a media atual no historico do localStorage

                let watched = JSON.parse(window.localStorage.getItem("medias_watched")) || []

                const date = getDate()

                if (!watched?.some(e => e.id == data.id)) {

                    watched.unshift({ id: `${data.id}`, media_type: media, name: data.title || data.name, date: date})

                    localStorage.setItem("medias_watched", JSON.stringify(watched))

                } else {

                    const array_id = watched.findIndex(e => e.id == data.id)
                    watched.splice(array_id, 1)

                    watched.unshift({ id: `${data.id}`, media_type: media, name: data.title || data.name, date: date})

                    localStorage.setItem("medias_watched", JSON.stringify(watched))

                }

                if (watched.length > 15)
                    watched.pop()
            
        }

    })


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
                {tags.map((e, id) => (
                    <Tag key={id}>{e}</Tag>
                ))}
            </TagContainer>
        </>
    )

}

export async function getServerSideProps(ctx) {

    const { media, id } = ctx.query


    const data = { ...await getMediaById(media, id), ...await getDetails(media, id) }
    const videos = [...await getMediaVideos(media, id) || []]
    const similarMedia = [...await getSimilarMedia(id, media) || []]
    const mediaRecommendations = [...await getMediaRecommendations(media, id) || []]

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


