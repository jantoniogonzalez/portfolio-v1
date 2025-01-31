'use client'
import React, { useRef, useState } from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SwitchboardIcon from "../../public/images/switchboard-icon.png"
import SFUIcon from "../../public/images/SFU-block-logo.png"
import Image from "next/image"  
import { motion, useScroll, useTransform } from "motion/react";
import SectionSubtitle from "./subtitles/SectionSubtitle"
import MagneticBagde from "./ui/magneticBadge"


export default function WorkAbout({id, setIsTitleHovered, setIsSubtitleHovered}) {
    const [isWork, setIsWork] = useState(true);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    });

    const xSubtitle = useTransform(
        scrollYProgress,
        [0, 0.75],
        [-450, 0]
    );

    const tabsVariants = {
        "open" : {
            width: "75%",
            backgroundColor: "#ffffff",
            color : "#222222",
            fontSize: "2rem",
            transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]},
        },
        "closed" : {
            width: "25%",
            backgroundColor: "transparent",
            color : "#ffffff",
            fontSize: "1rem",
            transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]},
        }
    }

    const cardsVariants = {
        "open" : {
            x: 0,
            y: 0,
            scaleX: 1,
            scaleY: 1,
            opacity: 1,
            transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]},
        },
        "closedLeft" : {
            x: "-50%",
            y: "-50%",
            scaleX: 0,
            scaleY: 0,
            opacity: 0,
            transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]},
        },
        "closedRight" : {
            x: "50%",
            y: "-50%",
            scaleX: 0,
            scaleY: 0,
            opacity: 0,
            transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]},
        }
    };

    const xScaleProgressBar = useTransform(
        scrollYProgress,
        [0, 0.75],
        [0, 1]
    );

    const scaleXTabs = useTransform(
        scrollYProgress,
        [0, 0.85],
        [0, 1]
    );

    const scaleYTabs = useTransform(
        scrollYProgress,
        [0, 0.85],
        [0, 1]
    );


    return (
        <div id={id} ref={ref} className="min-h-[100vh] py-[2rem] lg:mb-10 flex flex-col items-center">
            <motion.div
                style={{x: xSubtitle}}
                className="z-[1]"
            >
                <SectionSubtitle titleName="Experience" setIsTitleHovered={setIsTitleHovered} />
                    <motion.div
                        id="scroll-indicator"
                        style={{
                            scaleX: xScaleProgressBar,
                            position: "relative",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 10,
                            originX: "-50%",
                            backgroundColor: "#f5c63f",
                            borderRadius: "10px",
                            marginBottom: "3rem"
                        }}
                    />
            </motion.div>
            
            <motion.div
                style={{scaleX: scaleXTabs, scaleY: scaleYTabs }}
                className="w-[80vw] relative"
                // The rotateX can be transformed like , rotateX: (1-scrollYProgress)*90 window
            >
                <div
                    className="w-full relative flex items-center cursor-pointer font-medium uppercase z-[2]"
                    onMouseEnter={() => {setIsSubtitleHovered(true)}}
                    onMouseLeave={() => {setIsSubtitleHovered(false)}}
                >
                    <motion.div
                        variants={tabsVariants}
                        initial="open"
                        animate={ isWork ? "open" : "closed"}
                        className="text-center rounded-tl-xl py-2"
                        onClick={() => setIsWork(true)}
                    >
                        <h3>Work</h3>    
                        
                    </motion.div>
                    <motion.div
                        variants={tabsVariants}
                        initial="closed"
                        className="text-center bg-white rounded-tr-xl py-2"
                        animate={ isWork ? "closed" : "open"}
                        onClick={() => setIsWork(false)}
                    >
                        <h3>Education</h3>
                    </motion.div>
                </div>
                <div
                    className="relative"
                >
                <motion.div
                    className="absolute w-[80vw]"
                    variants={cardsVariants}
                    initial="open"
                    animate={ isWork ? "open" : "closedLeft"}
                >
                    <Card className="bg-transparent rounded-tl-none">
                        <CardCustomItem
                            dates="May 2023 - December 2023"
                            companyLogo={SwitchboardIcon}
                            companyName="Switchboard"
                            jobTitle="Web Software Developer - Co-op"
                            sectionSubtitle="Key Achievements"
                            achievements={[
                                "Redesigned and implemented the check-out page for dispatchers.",
                                "Designed and developed a multi-step modal to download and send trucker logs.",
                                "Led and planned web-team and cross-team meetings."
                            ]}
                            chips={["React", "NodeJS", "Figma", "SCSS", "Parse Server"]}
                        />
                    </Card>
                </motion.div>
                <motion.div
                    className="absolute w-[80vw]"
                    variants={cardsVariants}
                    initial="closedRight"
                    animate={ isWork ? "closedRight" : "open"}
                >
                    <Card className="bg-transparent rounded-tr-none">
                        <CardCustomItem
                            dates="January 2021 - May 2025"
                            companyLogo={SFUIcon}
                            companyName="Simon Fraser University"
                            jobTitle="BSc of Applied Sciences (Computer Science Major)"
                            sectionSubtitle="Relevant Coursework"
                            achievements={[
                                "Software Development Methods & Testing",
                                "Database Systems I & II",
                                "Distributed Systems",
                                "Operating Systems",
                                "Web Backend Development"
                            ]}
                        />
                    </Card>
                </motion.div>
                </div>
                
            </motion.div>
        </div>
    )
}

const CardCustomItem = ({dates, companyLogo, companyName, jobTitle, sectionSubtitle, achievements, chips}) => {
    return (
        <CardContent className="p-5 w-inherit">
            <CardDescription className="text-slate-300 text-[1.5rem] font-light">{dates}</CardDescription>
            <div className="flex gap-3 items-center h-fit py-3">
                <span className=" h-[4rem] aspect-[2/2] rounded-md">
                    <Image className="rounded-md" style={{objectFit: "fill"}} src={companyLogo} alt="Switchboard Logo" />
                </span>
                <CardTitle className="text-[2.5rem] font-medium uppercase text-white">{companyName}</CardTitle>
            </div>
            <CardDescription className="text-slate-300 text-[1.5rem] font-light">{jobTitle}</CardDescription>
            <CardTitle className="text-[1.75rem] font-normal text-white">{sectionSubtitle}</CardTitle>
            <CardDescription>
                <ul className="list-inside list-disc text-slate-200 text-[1.5rem] pl-[1vw]">
                {
                    achievements.map((achievement, id) => {
                        return (
                            <li className="p-[1vw] text-wrap leading-[2rem]" key={id}>{achievement}</li>
                        )
                    })
                }
                </ul>
                <div className="flex gap-2 flex-wrap">
                    {
                        chips && chips.map((chip, id) => {
                            return (
                                <MagneticBagde className="text-[1.25rem] py-[0.5vw]" key={id} num={id} content={chip} />
                            )
                        }) 
                    }
                </div>
            </CardDescription>
            
        </CardContent>
    )
}