import { apibase, tmdbkey} from './vars'

export const getMediaById = async (type, id) => {
// console.log(`${apibase}/${type}/${id}?api_key=${tmdbkey}&include_media_type=true&language=pt-BR`)

    return fetch(`${apibase}/${type}/${id}?api_key=${tmdbkey}&include_media_type=true&language=pt-BR&append_to_response=external_ids`)
        .then(resp => resp.json())
}

export const getDetails = async (type, id) => {
    //https://api.themoviedb.org/3/movie/550/credits?api_key=6f973dec3cd89007e8bbd8db4072c460&language=pt-BR
    return fetch(`${apibase}/${type}/${id}/credits?api_key=${tmdbkey}&language=pt-BR`)
        .then(resp => resp.json())
        .then(resp => {
            // console.log(id)
            let { crew, cast } = resp
            
       
            let result = {
                cast: Array.from(cast).filter(e => e.order < 4),
                crew: Array.from(crew).filter(e => e.job == "Director" || e.job == "Producer")
            }

            return result
        })

}

export const getEmbed = async (imdbId, name) => {
    // console.log(imdbId, name)  
   return fetch(`http://localhost:5000/embeds/find/name=${name}/imdbid=${imdbId}`).then(resp => resp.json())
        .then(resp => resp.imdb_id ? resp : null)
}

export const SearchMult = async (key_word, page) => {
    // https://api.themoviedb.org/3/search/multi?api_key=6f973dec3cd89007e8bbd8db4072c460&query=bat&language=en-US&page=1&include_adult=false
    return fetch(`${apibase}/search/multi?api_key=${tmdbkey}&query=${key_word}&language=pt-BR&page=${page}&include_adult=false`)
        .then(resp => resp.json())
        .then(({results}) => Array.from(results))
}

export const getSimilarMedia = async (id, type) => {
    console.log((`${apibase}/${type}/${id}/similar?api_key=${tmdbkey}&language=pt-BR&page=1`))
    return fetch(`${apibase}/${type}/${id}/similar?api_key=${tmdbkey}&language=pt-BR&page=1&include=media_type`)
        .then(resp => resp.json())
        .then(({ results }) => results)
}
export const getMediaVideos = async (type, id) => {
    console.log()
    return fetch(`${apibase}/${type}/${id}/videos?api_key=${tmdbkey}&language=pt-BR&append_to_response=videos`)
        .then(resp => resp.json())
        .then(({results}) => {
            // console.log(results)

            return results
    })
}

export const getMediaGenres= async(type) => {
    return fetch(`${apibase}/genre/${type}/list?api_key=${tmdbkey}&language=pt-BR`)
        .then(resp => resp.json())
        .then(({genres})=> genres)
}

export const getMediaByGenre = async (type, genreId) => {
    return fetch(`${apibase}/discover/${type}?api_key=${tmdbkey}&language=pt&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=${genreId}`)
        .then(resp => resp.json())
        // .then(resp => console.log(resp))
}
