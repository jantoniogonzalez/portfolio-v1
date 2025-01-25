'use client'
import React, { useRef } from "react"
import SectionSubtitle from "./subtitles/SectionSubtitle"
import TransitionText from "./TransitionText"
import {motion, useScroll, useTransform} from "motion/react"

export default function About({id}) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end end']
    })
    const xSubtitle = useTransform(
        scrollYProgress,
        [0, 0.75],
        [-200, 0]
    )
    return (
        <div id={id} ref={ref} className="h-[100vh] flex flex-col items-center overflow-hidden">
            <motion.div
                style={{x: xSubtitle}}
            >
                <SectionSubtitle titleName="More About Me" />
            </motion.div>
            <TransitionText /> 
        </div>
    )
}