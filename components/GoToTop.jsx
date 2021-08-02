import React from 'react'
import { useEffect } from 'react'

export default function GoToTop() {

    function handleClick() {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const { pageTop, height } = window.visualViewport
            const element = document.querySelector('.scrollTop')

            if (pageTop > height) 
                element.style.display = 'block'

            else 
                element.style.display = 'none'  
        })
    }, [])

    return (
        <div onScroll={() => console.log("scrol")} onClick={handleClick} className="p-3 hidden z-2000 shadow-xl scrollTop rounded-full cursor-pointer bg-green-500 fixed bottom-20  right-5">

            <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
            </svg>
        </div>
    )
}
