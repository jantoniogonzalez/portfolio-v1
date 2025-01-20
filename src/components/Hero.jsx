'use client'
import React, { useState } from "react";
import BlendCursor from "./BlendCursor";

export default function Hero() {
const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="h-[100vh] flex items-center justify-center">
            <h1
                onMouseEnter={() => {setIsHovered(true)}}
                onMouseLeave={() => {setIsHovered(false)}}
                className="text-[4.5vw] max-w-[90vw] text-center text-white p-20 z-20">
                Juan Antonio Gonzalez
            </h1>
            <BlendCursor isHovered={isHovered}/>
        </div>
    )
}