'use client'
import React from "react";
import SocialGamingPic from '../../public/images/socialgaming-screenshot.png'
import WinnablePic from '../../public/images/winnable-landing.png'
import FactosPic from '../../public/images/factos-screenshot.png'
import Image from "next/image";
import {motion} from "motion/react"

export default function Projects() {
    return (
        <div className="min-h-[100vh] bg-[#3b3b3b] py-[2vw] flex justify-center items-center">
            <motion.div className="w-[60vw] flex flex-col gap-y-[2.5vw]">
                <Project projectImg={FactosPic} title="Factos" dates="June 2024 - Ongoing" description="poop" order="order-first" />
                <Project projectImg={WinnablePic} title="Winnable" dates="February 2024 - April 2024" description="poop" order="order-last"/>
                <Project projectImg={SocialGamingPic} title="SocialGaming" dates="October 2024 - December 2024" description="poop" order="order-first" />
            </motion.div>
        </div>
    )
}

const Project = ({projectImg, title, dates, description, technologies, link, order}) => {
    return (
        <div className="grid grid-cols-2 gap-y-[2.5vw]" >
            <span className={`relative h-[20vw] aspect-[3/2] rounded-sm ${order}`}>
                <Image style={{objectFit: "cover"}} src={projectImg} alt="image" fill/>
            </span>
            <div>
                <h3 className="text-white text-[1.75rem]">{title}</h3>
                <h4 className="text-slate-300 text-[1.25rem]">{dates}</h4>
                <p className="text-slate-50 text-[1.25rem]">{description}</p>
            </div>
        </div>
    )
}
