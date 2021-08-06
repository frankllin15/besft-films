

export const resolvers = {
    Query: {

        // tv: async (_, args) => {
        //     try {

        //         const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/tv/${args.id}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&include_media_type=true&language=pt-BR&append_to_response=external_ids`)
        //         const json = await resp.json()

        //         return {
        //             id: json.id,
        //             name: json.name,
        //             poster_path: json.poster_path,
        //             backdrop_path: json.backdrop_path,
        //             vote_average: json.vote_average,
        //             imdb_id: json.external_ids.imdb_id,
        //             first_air_date: json.first_air_date,
        //             genres: json.genres,
        //             overview: json.overview,
        //             media_type: 'tv'

        //         }

        //     } catch (error) {

        //         throw error

        //     }
        // },

        media: async (_, { id, media_type }) => {
            try {

                const [data, cast] = await Promise.all([
                    fetch(`${process.env.NEXT_PUBLIC_BASE_API}/${media_type}/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&include_media_type=true&language=pt-BR&append_to_response=external_ids`)
                        .then(resp => resp.json()),
                    fetch(`${process.env.NEXT_PUBLIC_BASE_API}/${media_type}/${id}/credits?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR`)
                        .then(resp => resp.json())
                        .then(json => (
                            json.cast.map(e => ({
                                id: e.id,
                                name: e.name,
                                profile_path: e.profile_path
                            })).filter((_, id) => id < 4)
                        ))
                ])


                return {
                    id: data.id,
                    name: data.title || data.name,
                    poster_path: data.poster_path,
                    backdrop_path: data.backdrop_path,
                    vote_average: data.vote_average,
                    imdb_id: data.imdb_id || data.external_ids.imdb_id,
                    release_date: data.release_date || data.first_air_date,
                    runtime: data.runtime || null,
                    genres: data.genres,
                    overview: data.overview,
                    media_type,
                    cast
                }

            } catch (error) {

                throw error

            }
        },
        trendingMedia: async (_, { media_type }) => {

          

            try {


                const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/trending/${media_type}/week?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR`)
                const json = (await resp.json()).results

                return await json.map(e => ({
                    name: e.name || e.title,
                    media_type,
                    id: e.id,
                    poster_path: e.poster_path,
                    vote_average: e. vote_average
                }))


            } catch (error) {
                throw error
            }

        },
        mediaRecommendations: async (_, { media_type, id }) => {

            // const { media_type, id } = args

            try {
                const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/${media_type}/${id}/recommendations?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR`)
                const json = (await resp.json()).results

                return await json.map(e => ({
                    name: e.name || e.title,
                    media_type,
                    id: e.id,
                    poster_path: e.poster_path,
                    vote_average: e.vote_average
                }))

            } catch (error) {

                throw error

            }
        },
        mediaByGenre: async (_, { media_type, genre_id, page, period }) => {


            try {

                const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/discover/${media_type}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}&with_genres=${genre_id}${(period && media_type == "movie" ? "&primary_release_year=" : "&first_air_date_year=") + period}`)
                const json = await resp.json()
                const results = (await json.results).map(e => ({
                    id: e.id,
                    name: e.name || e.title,
                    media_type,
                    poster_path: e.poster_path
                }))

                return {
                    results,
                    total_pages: json.total_pages

                }
            } catch (error) {

                throw error

            }
        },
        topRatedTmdb: async (_, { media_type, page }) => {

            try {

                const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/${media_type}/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR&page=${page}`)
                const json = await resp.json()
                const results = (await json).results.map(e => ({
                    id: e.id,
                    name: e.name || e.title,
                    media_type,
                    poster_path: e.poster_path,
                    vote_average: e.vote_average
                }))

                return {
                    results,
                    total_pages: json.total_pages
                }


            } catch (error) {

                throw error

            }

        },
        releaseMovies: async (_, { page }) => {
            try {

                const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR&page=${page}`)
                const json = await resp.json()

                const results = (await json).results.map(e => ({
                    name: e.name || e.title,
                    media_type: 'movie',
                    id: e.id,
                    poster_path: e.poster_path,
                    vote_average: e.vote_average
                }))

                return {
                    results,
                    total_pages: json.total_pages
                }


            } catch (error) {

                throw error

            }

        },
        peaple: async (_, { id }) => {

            try {

                const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/person/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR`)
                const json = await resp.json()

                return {
                    id: json.id,
                    name: json.name,
                    profile_path: json.profile_path,
                    known_for_department: json.known_for_department,
                    place_of_birth: json.place_of_birth,
                    birthday: json.birthday,
                    biography: json.biography
                }

            } catch (error) {

                throw error

            }
        },
        artWorks: async (_, { id, media_type, page }) => {

            try {

                page = Number(page) - 1


                const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/person/${id}/${media_type}_credits?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR`)
                const json = await resp.json()
                const cast = await json.cast

                const results = await cast.filter((e, id) => id >= page * 20 && id <= (page + 1) * 20 - 1)
                    .map(e => ({
                        id: e.id,
                        name: e.name || e.title,
                        media_type,
                        poster_path: e.poster_path
                    }))

                return {
                    results,
                    total_pages: Math.floor(cast.length / 20)
                }
            } catch (error) {

                throw error

            }

        },
        mediaVideos: async (_, { id, media_type }) => {

            try {

                const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/${media_type}/${id}/videos?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR&append_to_response=videos`)
                const json = await resp.json()

                const results = (await json).results
                    .map(e => ({
                        key: e.key,
                        name: e.name,
                        site: e.site
                    }))

                return results


            } catch (error) {

                throw error

            }
        },
        similarMedia: async (_, { id, media_type }) => {

            try {

                const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/${media_type}/${id}/similar?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=pt-BR&page=1`)
                const json = await resp.json()

                const results = (await json).results
                    .map(e => ({
                        name: e.name || e.title,
                        id: e.id,
                        poster_path: e.poster_path,
                        media_type,
                        vote_average: e.vote_average

                    }))

                return results

            } catch (error) {

                throw error

            }
        }

    }
};

