'use client'
import React, { useEffect, useRef, useState } from "react"
import { useScroll, useTransform, motion } from "motion/react"
import Lenis from 'lenis';
import Image from 'next/image';
import AdventurerPic from '../../public/images/adventure-pic-editted.png'
import FloatingPic from '../../public/images/floating-water.jpg'
import DogPic from '../../public/images/lorenzo-pic.png'
import BlendCursor from "./BlendCursor";

export default function TransitionText() {
    
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf);
    }, [])

    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });

    return (
        <div className="h-[100vh] overflow-hidden">
            <div ref={container}>
                <Slider text="Adventurer" src={AdventurerPic} left="-40%" progress={scrollYProgress} direction={200} />
                <Slider text="Swimmmer" src={FloatingPic} left="-15%" progress={scrollYProgress} direction={-250}/>
                <Slider text="Loves Animals" src={DogPic} left="-27.5%" progress={scrollYProgress} direction={250}/>
            </div>
        </div>
    )
}

const Slider = ({text, src, left, progress, direction}) => {
    const x = useTransform(progress, [0, 1], [direction, direction*-1]);
    return (
        <motion.div
            className="relative flex whitespace-nowrap py-2"
            style={{left, x}}
        >
            <Phrase text={text} src={src}/>
            <Phrase text={text} src={src}/>
            <Phrase text={text} src={src}/>
            <Phrase text={text} src={src}/>
            <Phrase text={text} src={src}/>
        </motion.div>
    )
}

const Phrase = ({text, src}) => {
    return (
        <div className={"flex px-5 gap-5 items-center"}>
            <p className="text-[3vw] text-white">{text}</p>
            <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
                <Image style={{objectFit: "cover"}} src={src} alt="image" fill/>
            </span>
        </div>
    )
}

