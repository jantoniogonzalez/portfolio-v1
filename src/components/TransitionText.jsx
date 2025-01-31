'use client'
import React, { useEffect, useRef, useState } from "react"
import { useScroll, useTransform, motion } from "motion/react"
import Lenis from 'lenis';
import Image from 'next/image';
import AdventurerPic from '../../public/images/adventure-pic-editted.png'
import FloatingPic from '../../public/images/floating-water.jpg'
import DogPic from '../../public/images/lorenzo-pic.png'
import DBPic from '../../public/images/dragonboat.jpg'
import ReaderPic from '../../public/images/reader.jpg'
import FootballPic from '../../public/images/footballpic.jpg'

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
        <div className="w-[80vw] 2xl:w-[50vw] overflow-hidden">
            <div ref={container}>
                <Slider text="UBC Dragon Boat Paddler" src={DBPic} left="-3.5%" progress={scrollYProgress} direction={250}/>
                <Slider text="Ex-Competitive Swimmer" src={FloatingPic} left="-1%" progress={scrollYProgress} direction={-250}/>
                <Slider text="Reading: Concurrency in Go" src={ReaderPic} left="-5%" progress={scrollYProgress} direction={200} />
                <Slider text="Amateur Hiker & Adventurer" src={AdventurerPic} left="-1%" progress={scrollYProgress} direction={-200} />
                <Slider text="Professional Dog Petter" src={DogPic} left="-3%" progress={scrollYProgress} direction={250}/>
                <Slider text="Football Enjoyer" src={FootballPic} left="-12%" progress={scrollYProgress} direction={-350}/>
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
        <div className="flex px-5 gap-5 items-center">
            <p className="text-[1.5rem] lg:text-[2rem] text-white">{text}</p>
            <span className="relative h-[6rem] lg:h-[8rem] aspect-[4/2] rounded-full overflow-hidden">
                <Image style={{objectFit: "cover"}} src={src} alt="image" fill/>
            </span>
        </div>
    )
}

