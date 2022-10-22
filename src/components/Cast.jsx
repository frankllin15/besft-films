import React, { useState } from 'react'


export default function Cast({data}) {
    const [isImgNotFound, setIsImgNotFound] = useState(false)

    function handleImgError(e) {

        e.target.onerror = null;
        setIsImgNotFound(true)
    }

    return (
        <div className="flex items-center flex-wrap">
            {data.map((e, id) => (
                <a href={`/artist/${e.id}`}  className="inline-flex  items-center ml-3 mb-2" key={id} >   
                <div className="overflow-hidden w-11 h-11 rounded-full">
                {/* <img className="mt-auto mb-auto"  width={45} height={67} src={`https://image.tmdb.org/t/p/w45/${e.profile_path}`}/> */}
                <img  onError={e => handleImgError(e)}  className="mt-auto mb-auto"  src={isImgNotFound ? "/img/blank-profile-picture-44x44.png" : `https://image.tmdb.org/t/p/w45/${e.profile_path}`} />

                </div>
                <p className="text-white ml-2 text-sm font-semibold inline">{e.name}</p>
            </a>
                ))}
        </div>
    )
}


// blank-profile-picture-44x44.png