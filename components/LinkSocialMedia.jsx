import React from 'react'



export default function LinkSosialMedia({ logo, children, bgColor, href, color }) {

    bgColor = "bg-"+bgColor
    return (
        <a color={color} href={href} className={`flex items-center justify-around mr-4 mb-4 ${bgColor} hover:opacity-90 min-w-93px h-10 rounded-lg p-4 `}>
            <img width="32" height="32" src={logo}/>
            <p className={`inline-block ml-3 text-${color || "white"} font-bold`}>
            {children}
            </p>
        </a>
    )
}
