import { apibase, tmdbkey } from '../../lib/vars'

export default async (req, res) => {
    const result = await fetch(`${apibase}/trending/movie/week?api_key=${tmdbkey}&language=pt-BR`)
    const json = await result.json()

    res.status(200).json({
        list: json.results
    })
}