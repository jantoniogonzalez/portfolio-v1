'use client'
import React, { useRef } from "react"
import SectionSubtitle from "./subtitles/SectionSubtitle"
import TransitionText from "./TransitionText"
import {motion, useScroll, useTransform} from "motion/react"
import Link from "next/link"
import GsapMagnetic from "./GsapMagnetic"

export default function About({id, setIsTitleHovered, setIsSubtitleHovered}) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end end']
    });
    const xSubtitle = useTransform(
        scrollYProgress,
        [0, 0.75],
        [-200, 0]
    );
    const xScaleProgressBar = useTransform(
        scrollYProgress,
        [0, 0.75],
        [0, 1]
    )
    return (
        <div id={id} ref={ref} className="min-h-[100vh] flex flex-col items-center overflow-hidden">
            <motion.div
                style={{x: xSubtitle}}
                className="z-[1]"
            >
                <SectionSubtitle titleName="More About Me" setIsTitleHovered={setIsTitleHovered} />
                <motion.div
                    style={{
                        scaleX: xScaleProgressBar,
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 10,
                        originX: "50%",
                        backgroundColor: "#c32d27",
                        borderRadius: "10px",
                        marginBottom: "3rem",
                        overflow: "hidden",
                    }}
                />
                
            </motion.div>
            <TransitionText /> 
            <Link
                href="#hero"
                className="py-10 flex flex-col justify-center items-center z-[1]"
                scroll={true}
                onMouseEnter={() => {setIsSubtitleHovered(true)}}
                onMouseLeave={() => {setIsSubtitleHovered(false)}}
            >
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15.0002" cy="14.6389" r="13.4543" transform="rotate(180 15.0002 14.6389)" stroke="#F0F0F0" strokeWidth="2"/>
                    <path d="M15.7076 8.38811C15.3171 7.99758 14.6839 7.99758 14.2934 8.38811L7.92942 14.7521C7.53889 15.1426 7.53889 15.7758 7.92942 16.1663C8.31994 16.5568 8.95311 16.5568 9.34363 16.1663L15.0005 10.5094L20.6573 16.1663C21.0479 16.5568 21.681 16.5568 22.0716 16.1663C22.4621 15.7758 22.4621 15.1426 22.0716 14.7521L15.7076 8.38811ZM16.0005 10.2969L16.0005 9.09522L14.0005 9.09521L14.0005 10.2969L16.0005 10.2969Z" fill="#F0F0F0"/>
                    <path d="M15.5308 13.1086C15.2379 12.8157 14.7631 12.8157 14.4702 13.1086L9.69719 17.8816C9.40429 18.1744 9.40429 18.6493 9.69719 18.9422C9.99008 19.2351 10.465 19.2351 10.7578 18.9422L15.0005 14.6996L19.2431 18.9422C19.536 19.2351 20.0109 19.2351 20.3038 18.9422C20.5967 18.6493 20.5967 18.1745 20.3038 17.8816L15.5308 13.1086ZM15.7505 14.6389L15.7505 13.6389L14.2505 13.6389L14.2505 14.6389L15.7505 14.6389Z" fill="#F0F0F0"/>
                </svg>

                <p className="text-white text-center text-[1.25rem]">Get Me Back Up,<br/>I Wanna Talk To This Guy</p>
            </Link>
        </div>
    )
}