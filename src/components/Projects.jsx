'use client'
import React, { useRef } from "react";
import SocialGamingPic from '../../public/images/socialgaming-screenshot.png'
import WinnablePic from '../../public/images/winnable-landing.png'
import FactosPic from '../../public/images/factos-screenshot.png'
import Image from "next/image";
import {motion, useScroll, useTransform} from "motion/react"
import { Badge } from "./ui/badge";

export default function Projects() {
    return (
        <div className="min-h-[100vh] bg-[#3b3b3b] py-[2vw] flex justify-center items-center overflow-hidden">
            <div className="w-[80vw] flex flex-col gap-y-[2.5vw]">
                <Project
                    projectImg={FactosPic}
                    title="Factos"
                    roles="Solo Project"
                    description="Web application to save, share and challenge friends to predict football matches."
                    technologies={["Golang", "MySql"]}
                    order="flex-row"
                />
                <Project
                    projectImg={WinnablePic}
                    title="Winnable"
                    roles="Front-end, Websockets, Authentication"
                    description="Web application to organize gaming decathlons."
                    technologies={["React", "NodeJS", "MongoDB", "Google Cloud"]}
                    order="flex-row-reverse"
                />
                <Project
                    projectImg={SocialGamingPic}
                    title="SocialGaming"
                    roles="Language Parsing"
                    description="Application to create games in a JSON-like language."
                    technologies={["C++"]}
                    order="flex-row" />
            </div>
            <p className="absolute -rotate-90 left-1 text-[3rem] text-slate-200 opacity-50 font-logo tracking-tighter">II.Projects</p>
        </div>
    )
}

const Project = ({projectImg, title, roles, description, technologies, link, order}) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const rotateImage = useTransform(
        scrollYProgress,
        [0.5, 0.60, 0.70, 0.80, 0.90, 1],
        [0, 2, 4, 5, 7, 10]
    )
    const xImage = useTransform(
        scrollYProgress,
        [0.5, 0.60, 0.70, 0.80, 0.90, 1],
        [0, 20, 30, 40, 70, 100]
    )

    const yText = useTransform(
        scrollYProgress,
        [0.5, 1],
        [0, 100]
    )

    const opacityText = useTransform(
        scrollYProgress,
        [0.5, 1],
        [1, 0]
    )

    return (
        <motion.div ref={ref} className={`flex flex-col w-full items-center gap-y-[1rem] lg:gap-x-[2rem] lg:${order} overflow-hidden`} >
            <motion.span
                className={`relative w-full lg:w-[50%] aspect-[3/2] rounded-xl overflow-hidden`}
                style={{x: xImage,rotate: rotateImage, opacity: opacityText}}
            >
                <Image style={{objectFit: "cover"}} src={projectImg} alt="image" fill/>
            </motion.span>
            <motion.div
                className="w-full lg:w-[50%]"
                style={{y: yText, opacity: opacityText}}
            >
                <h3 className="text-white text-[1.75rem] font-logo uppercase">{title}</h3>
                <h4 className="text-slate-300 text-[1.25rem]">{roles}</h4>
                <p className="text-slate-50 text-[1.25rem]">{description}</p>
                <div className="flex gap-2 flex-wrap">
                    {
                        technologies && technologies.map((technology, id) => {
                            return (
                                <Badge className="text-[1rem] py-[0.5vw]" key={id}>{technology}</Badge>
                            )
                        }) 
                    }
                </div>
            </motion.div>
        </motion.div>
    )
}
