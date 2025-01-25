'use client'
import React from "react";

export default function SectionSubtitle({titleName}) {
    return(
        <div className="w-[80vw] py-[3rem]">
            <h2 className="text-white text-[5rem] font-semibold uppercase tracking-tighter leading-[5rem] text">{titleName}</h2>
        </div>
    )
}