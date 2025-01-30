'use client'
import React from "react";

export default function SectionSubtitle({titleName, setIsTitleHovered}) {
    return(
        <div className="w-[80vw] py-[3rem]">
            <h2
                onMouseEnter={() => {setIsTitleHovered(true)}}
                onMouseLeave={() => {setIsTitleHovered(false)}}
                className="text-white text-[5rem] font-semibold uppercase tracking-tighter leading-[5rem] w-fit z-[1]"
            >{titleName}</h2>
        </div>
    )
}