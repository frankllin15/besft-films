import React from 'react'
import Image from 'next/image'

export default function Cast({data}) {
    return (
        <div >
            {data.map((e, id) => (
                <div className="inline-flex  items-center ml-3" key={id} >   
                <div className="relative overflow-hidden w-11 h-11 rounded-full">
                <Image width={45} height={67} src={`https://image.tmdb.org/t/p/w45/${e.profile_path}`}/>

                </div>
                <p className="text-white ml-2 text-sm font-semibold inline">{e.name}</p>
            </div>
                ))}
        </div>
    )
}
