import React from 'react'
import { useEffect } from 'react'


export default function CookiePermition() {

    const [cookiesAllowed, setCokiesAllowed] = React.useState(true)

    useEffect(() => {
        const  storageCookiesAllowed = localStorage.getItem("cookiesAllowed")

        if (storageCookiesAllowed === "true")
            setCokiesAllowed(true)
        else
            setCokiesAllowed(false)
    }, [])

    const handlleClick = () => {
        localStorage.setItem("cookiesAllowed", "true")
        setCokiesAllowed(true)
    }


    if (!cookiesAllowed) 
        return (
        <div style={{backgroundColor: '#eee' }} className="fixed flex flex-row z-2000 bottom-2 items-center mr-2 ml-2  p-3 rounded-lg shadow-xl ">
            <p className="text-blue-900 mr-3 font-bold">Esse site utiliza cookies de terceiros para oferecer uma melhor experiencia.</p>
            
            <button className="p-2 rounded-lg border shadow-lg hover:shadow-none  min-w-100px text-blue-900 font-bold  border-blue-900 h-9" onClick={handlleClick}>Tudo bem</button>
        </div>
    ) 
    else 
        return null
}
