'use client'
import React, { useRef } from "react";
import SocialGamingPic from '../../public/images/socialgaming-screenshot.png'
import WinnablePic from '../../public/images/winnable-landing.png'
import FactosPic from '../../public/images/factos-screenshot.png'
import Image from "next/image";
import {motion, useScroll, useTransform} from "motion/react"
import { Badge } from "./ui/badge";
import SectionSubtitle from "./subtitles/SectionSubtitle";
import GsapMagnetic from "./GsapMagnetic";

export default function Projects({id}) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    });

    const xSubtitle = useTransform(
        scrollYProgress,
        [0, 0.5],
        [-250, 0]
    );
    return (
        <div ref={ref} id={id} className="min-h-[100vh] py-[2vw] flex flex-col justify-center items-center overflow-hidden relative z-0">
            <motion.div
                style={{x: xSubtitle}}
                className="relative z-0"
            >
                <SectionSubtitle titleName="Recent Projects" />
            </motion.div>
            <div className="w-[80vw] flex flex-col gap-y-[3rem] relative z-0 snap-center">
                <RightSideProject
                    projectImg={FactosPic}
                    title="Factos"
                    roles="Solo Project"
                    description="Web application to save, share and challenge friends to predict football matches."
                    technologies={["Golang", "MySql"]}
                    githubLink="https://github.com/jantoniogonzalez/factos"

                />
                <LeftSideProject
                    projectImg={WinnablePic}
                    title="Winnable"
                    roles="Front-end, Websockets, Authentication"
                    description="Web application to organize gaming decathlons."
                    technologies={["React", "NodeJS", "MongoDB", "Google Cloud"]}
                    githubLink="https://github.com/Kylet1699/Winnable"
                    demoLink="https://winnable.vercel.app/"
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

const RightSideProject = ({projectImg, title, roles, description, technologies, githubLink, demoLink, order}) => {
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
                className={`relative z-0 w-full lg:w-[50%] aspect-[3/2] rounded-xl overflow-hidden`}
                style={{x: xImage, rotate: rotateImage}}
            >
                <Image style={{objectFit: "cover"}} src={projectImg} alt="image" fill/>
            </motion.span>
            <motion.div
                className="w-full lg:w-[50%]"
                style={{y: yText, opacity: opacityText}}
            >
                <h3 className="text-white text-[2.5rem] font-logo uppercase">{title}</h3>
                <h4 className="text-slate-300 text-[1.5rem]">{roles}</h4>
                <p className="text-slate-50 text-[1.5rem] pb-[1rem]">{description}</p>
                <div className="flex items-center justify-between">
                    <div className="flex gap-2 flex-wrap">
                        {
                            technologies && technologies.map((technology, id) => {
                                return (
                                    <GsapMagnetic key={id}>
                                        <Badge className="text-[1.25rem] py-[0.5vw]">{technology}</Badge>
                                    </GsapMagnetic>
                                )
                            }) 
                        }
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        {
                            githubLink && (
                                <GsapMagnetic>
                                <div className="uppercase text-white border-solid border-2 border-white rounded-xl px-[1rem] py-[0.5rem] text-[1.25rem] hover:border-[#f5c63f] hover:text-[#f5c63f]">
                                    <a target="_blank" rel="noopener noreferrer"href={githubLink}>Github</a>
                                </div>
                                </GsapMagnetic>
                            )
                        }
                        {
                            demoLink && (
                                <GsapMagnetic>
                                <div className="uppercase text-white border-solid border-2 border-white rounded-xl px-[1rem] py-[0.5rem] text-[1.25rem] hover:border-[#356fdb] hover:text-[#356fdb]">
                                    <a  target="_blank" rel="noopener noreferrer"href={demoLink}>Demo</a>
                                </div>
                                </GsapMagnetic>
                            )
                        }   
                    </div>   
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
                <h3 className="text-white text-[2.5rem] font-logo uppercase">{title}</h3>
                <h4 className="text-slate-300 text-[1.5rem]">{roles}</h4>
                <p className="text-slate-50 text-[1.5rem]">{description}</p>
                <div className="flex items-center justify-between">
                    <div className="flex gap-2 flex-wrap">
                        {
                            technologies && technologies.map((technology, id) => {
                                return (
                                    <GsapMagnetic key={id}>
                                        <Badge className="text-[1.25rem] py-[0.5vw]">{technology}</Badge>
                                    </GsapMagnetic>
                                )
                            }) 
                        }
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        {
                            githubLink && (
                                <GsapMagnetic>
                                <div className="uppercase text-white border-solid border-2 border-white rounded-xl px-[1rem] py-[0.5rem] text-[1.25rem] hover:border-[#f5c63f] hover:text-[#f5c63f]">
                                    <a target="_blank" rel="noopener noreferrer"href={githubLink}>Github</a>
                                </div>
                                </GsapMagnetic>
                            )
                        }
                        {
                            demoLink && (
                                <GsapMagnetic>
                                <div className="uppercase text-white border-solid border-2 border-white rounded-xl px-[1rem] py-[0.5rem] text-[1.25rem] hover:border-[#356fdb] hover:text-[#356fdb]">
                                    <a  target="_blank" rel="noopener noreferrer"href={demoLink}>Demo</a>
                                </div>
                                </GsapMagnetic>
                            )
                        }   
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}
