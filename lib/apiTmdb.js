

export const getMediaById = async (type, id) => {
    return fetch(`${process.env.NEXT_PUBLIC_BASE_API}/${type}/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&include_media_type=true&language=pt-BR&append_to_response=external_ids`)
        .then(resp => resp.json())
        .catch(e => [])
}


export const getDetails = async (type, id) => {
    return fetch(`${process.env.NEXT_PUBLIC_BASE_API}/${type}/${id}/credits?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR`)
        .then(resp => resp.json())
        .then(resp => {
            let { crew, cast } = resp
        
            let result = {
                cast: Array.from(cast).filter(e => e.order < 4),
                crew: Array.from(crew).filter(e => e.job == "Director" || e.job == "Producer")
            }
            return result
        })
        .catch(e => [])
}

export const getEmbed = async (imdbId, name) => {

   return fetch(`http://localhost:5000/embeds/find/name=${name}/imdbid=${imdbId}`).then(resp => resp.json())
        .then(resp => resp.imdb_id ? resp : null)
}

export const SearchMult = async (key_word, page) => {
   return fetch(`${process.env.NEXT_PUBLIC_BASE_API}/search/multi?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&query=${key_word}&language=pt-BR&page=${page}&include_adult=false`)
        .then(resp => resp.json())
       
}

export const getSimilarMedia = async (id, type) => {
    return fetch(`${process.env.NEXT_PUBLIC_BASE_API}/${type}/${id}/similar?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR&page=1&include=media_type`)
        .then(resp => resp.json())
        .then(({ results }) => results)
}
export const getMediaVideos = async (type, id) => {
  
    return fetch(`${process.env.NEXT_PUBLIC_BASE_API}/${type}/${id}/videos?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR&append_to_response=videos`)
        .then(resp => resp.json())
        .then(({results}) => {
          

            return results
    })
    .catch(e => [1])
}

export const getMediaGenres= async(type) => {
    return fetch(`${process.env.NEXT_PUBLIC_BASE_API}/genre/${type}/list?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR`)
        .then(resp => resp.json())
        .then(({genres})=> {
        
            return genres
        })
}

export const getMediaByGenre = async (type, page, filter) => {
   
    return fetch(`${process.env.NEXT_PUBLIC_BASE_API}/discover/${type}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}&with_genres=${filter["genre"]}&${filter.primary_release_year ? "primary_release_year="+filter.primary_release_year : "first_air_date_year="+filter.first_air_date_year}`)
        .then(resp => resp.json())
        
}

export const getTrandingMedia = async (type) => {

    return fetch(`${process.env.NEXT_PUBLIC_BASE_API}/trending/${type}/week?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR`)
        .then(resp => resp.json())
        .then(({ results }) => results) 
}

export const getMediaRecommendations = async (type, id) => {
    return fetch(`${process.env.NEXT_PUBLIC_BASE_API}/${type}/${id}/recommendations?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR`)
        .then(resp => resp.json())
        .then(({results}) => results)
}

export const getTopRatedTmdb = async (type, page) => {

    return fetch(`${process.env.NEXT_PUBLIC_BASE_API}/${type}/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR&page=${page}`)
        .then(resp => resp.json())
}

export const getReleaseMovies = async (page) => {

    return fetch(`${process.env.NEXT_PUBLIC_BASE_API}/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR&page=${page}`)
        .then(resp => resp.json())
}
