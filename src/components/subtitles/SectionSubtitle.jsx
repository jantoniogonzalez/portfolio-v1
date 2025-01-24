'use client'
import React from "react";

export default function SectionSubtitle({titleName, gradientFrom, gradientTo}) {
    return(
        <div className={`w-full py-[3rem] bg-gradient-to-b from-[${gradientFrom}] to-[${gradientTo}]`}>
            <h2 className="text-white text-[5rem] font-semibold uppercase tracking-tighter text">{titleName}</h2>
        </div>
    )
}