'use client'
import React from "react"
import SectionSubtitle from "./subtitles/SectionSubtitle"
import TransitionText from "./TransitionText"

export default function About() {
    return (
        <div className="h-[100vh] flex flex-col items-center overflow-hidden">
            <SectionSubtitle titleName="More About Me" />
            <TransitionText /> 
        </div>
    )
}