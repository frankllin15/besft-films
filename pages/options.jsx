import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getMultipleMediaById } from '../lib/apiTmdb'

export default function history() {
    const [history, setHistory] = useState([])

    useEffect(() => {
        setHistory(JSON.parse(localStorage.getItem("medias_watched")))
    }, [])

    function handleDelete(id) {
        
        const historyAux = JSON.parse(localStorage.getItem("medias_watched")) || []
        const history_id = history.findIndex(e => e.id == id)
    
        historyAux.splice(history_id, 1)

        setHistory(historyAux)
      
        localStorage.setItem("medias_watched", JSON.stringify(historyAux))
    }

    return (
        <div className="w-fulll min-h-360 p-2 pt-11">
            <h2 className="text-xl text-center">Hitorico</h2>
            <ul className="max-w-full pl-2 pr-5 ml-0">
                <li className="bg-gray-200 rounded-md flex flex-row  p-3 mb-2 font-semibold text-lg sm:text-sm text-black">

                <p className="text-black flex-1">Visto em</p>
                <p className="text-black flex-2">Nome</p>
                </li>
                {history ? history.map((item, id) => (
                    <li key={id} className="flex flex-row mb-2 items-center bg-gray-100 rounded-md p-3 text-blue-900 font-semibold text-lg sm:text-sm">
                        <p className="flex-1 text-gray-500">{item.date}</p>
                        <a className="flex-2" href={`/${item.media_type}/${item.id}`}>{item.name || item.title}</a>


                        <svg onClick={() => handleDelete(item.id)} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="red">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                    </li>
                ))
                    :
                    ""
                }
            </ul>
        </div>
    )
}
