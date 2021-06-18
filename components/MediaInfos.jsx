import React from 'react'
import { hourFormat } from '../lib/utils'


export default function MediaInfos({ data }) {
    return (
        
            <dl>
                          

                            <dt>
                                Elenco
                        </dt>
                            <dd>
                                {data.cast.map((e, id) => (
                                    <p key={id}>{e.name}</p>
                                ))}
                            </dd>
                            <dt>
                                Gênero
                        </dt>
                            <dd>
                                {data.genres.filter((e, id) => id < 3).map((e, id) => <p key={id}>{e.name}</p>)}
                            </dd>
                            <dt>
                                Ano de Lançamento
                        </dt>
                            <dd>
                                {(data.release_date ? data.release_date : data.first_air_date).substring(0, 4)}
                            </dd>
                            {
                                data.runtime ?
                                    <>
                                        <dt>
                                            Duração
                                    </dt>
                                        <dd>
                                            {hourFormat(data.runtime)}
                                        </dd>
                                    </>
                                    :
                                    ""
                            }

                            <dt>
                                Imdb Rating
                        </dt>
                            <dd>
                                {data.vote_average}
                            </dd>
                        </dl>
       
    )
}
