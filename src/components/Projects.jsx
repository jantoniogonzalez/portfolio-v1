'use client'
import React, { useRef } from "react";
import SocialGamingPic from '../../public/images/socialgaming-screenshot.png'
import WinnablePic from '../../public/images/winnable-landing.png'
import FactosPic from '../../public/images/factos-screenshot.png'
import Image from "next/image";
import {motion, useScroll, useTransform} from "motion/react"
import { Badge } from "./ui/badge";
import SectionSubtitle from "./subtitles/SectionSubtitle";

export default function Projects() {

    return (
        <div className="min-h-[100vh] py-[2vw] flex flex-col justify-center items-center overflow-hidden">
            <SectionSubtitle titleName="Recent Projecs" />
            <div className="w-[80vw] flex flex-col gap-y-[3rem]">
                <RightSideProject
                    projectImg={FactosPic}
                    title="Factos"
                    roles="Solo Project"
                    description="Web application to save, share and challenge friends to predict football matches."
                    technologies={["Golang", "MySql"]}                    
                />
                <LeftSideProject
                    projectImg={WinnablePic}
                    title="Winnable"
                    roles="Front-end, Websockets, Authentication"
                    description="Web application to organize gaming decathlons."
                    technologies={["React", "NodeJS", "MongoDB", "Google Cloud"]}
                />
                <RightSideProject
                    projectImg={SocialGamingPic}
                    title="SocialGaming"
                    roles="Language Parsing"
                    description="Application to create games in a JSON-like language."
                    technologies={["C++"]}
                />
            </div>
        </div>
    )
}

const RightSideProject = ({projectImg, title, roles, description, technologies, link, order}) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    });
    const rotateImage = useTransform(
        scrollYProgress,
        [0, 1],
        [10, 0]
    )
    const xImage = useTransform(
        scrollYProgress,
        [0, 1],
        [250, 0]
    )

    const yText = useTransform(
        scrollYProgress,
        [0, 1],
        [100, 0]
    )

    const opacityText = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 1]
    )

    return (
        <motion.div ref={ref} className={`flex flex-col w-full items-center gap-y-[1rem] lg:gap-x-[2rem] lg:flex-row-reverse`} >
            <motion.span
                className={`relative w-full lg:w-[50%] aspect-[3/2] rounded-xl overflow-hidden`}
                style={{x: xImage, rotate: rotateImage}}
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


const LeftSideProject = ({projectImg, title, roles, description, technologies, githubLink, demoLink}) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    });
    const rotateImage = useTransform(
        scrollYProgress,
        [0, 1],
        [-10, 0]
    )
    const xImage = useTransform(
        scrollYProgress,
        [0, 1],
        [-250, 0]
    )

    const yText = useTransform(
        scrollYProgress,
        [0, 1],
        [100, 0]
    )

    const opacityText = useTransform(
        scrollYProgress,
        [0, 0.25, 1],
        [0, 0, 1]
    )

    return (
        <motion.div ref={ref} className={`flex flex-col w-full items-center gap-y-[1rem] lg:gap-x-[2rem] lg:flex-row`} >
            <motion.span
                className={`relative w-full lg:w-[50%] aspect-[3/2] rounded-xl overflow-hidden`}
                style={{x: xImage, rotate: rotateImage}}
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
