

export const getMediaById = async (type, id) => {
    return fetch(`${process.env.NEXT_PUBLIC_BASE_API}/${type}/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&include_media_type=true&language=pt-BR&append_to_response=external_ids`)
        .then(resp => resp.json())
}

export const getDetails = async (type, id) => {
    return fetch(`${process.env.NEXT_PUBLIC_BASE_API}/${type}/${id}/credits?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR`)
        .then(resp => resp.json())
        .then(resp => {
            let { crew, cast } = resp
            // console.log(resp)
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
    return fetch(`${process.env.NEXT_PUBLIC_BASE_API}/search/multi?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&query=${key_word}&language=pt-BR&page=${page}&include_adult=false`)
        .then(resp => resp.json())
        .then(({results}) => Array.from(results))
}

export const getSimilarMedia = async (id, type) => {
    // console.log((`${process.env.NEXT_PUBLIC_BASE_API}/${type}/${id}/similar?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR&page=1`))
    return fetch(`${process.env.NEXT_PUBLIC_BASE_API}/${type}/${id}/similar?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR&page=1&include=media_type`)
        .then(resp => resp.json())
        .then(({ results }) => results)
}
export const getMediaVideos = async (type, id) => {
    // console.log()
    return fetch(`${process.env.NEXT_PUBLIC_BASE_API}/${type}/${id}/videos?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR&append_to_response=videos`)
        .then(resp => resp.json())
        .then(({results}) => {
            // console.log(results)

            return results
    })
}

export const getMediaGenres= async(type) => {
    return fetch(`${process.env.NEXT_PUBLIC_BASE_API}/genre/${type}/list?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR`)
        .then(resp => resp.json())
        .then(({genres})=> genres)
}

export const getMediaByGenre = async (type, genreId, page) => {
    return fetch(`${process.env.NEXT_PUBLIC_BASE_API}/discover/${type}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}&with_genres=${genreId}`)
        .then(resp => resp.json())
        // .then(resp => console.log(resp))
}

export const getTrandingMedia = async (type) => {

    return fetch(`${process.env.NEXT_PUBLIC_BASE_API}/trending/${type}/week?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR`)
        .then(resp => resp.json())
        .then(({ results }) => results) 
}
