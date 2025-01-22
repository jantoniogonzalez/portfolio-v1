'use client'
import React, { useRef } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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


export default function WorkAbout() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    });
    const rotateX = (scrollYProgress) => {
        return (1-scrollYProgress)*90
    }

    return (
        <div ref={ref} className="h-[100vh] relative flex justify-center bg-[#282828] items-center snap-mandatory">
            <motion.div
                style={{scaleX: scrollYProgress, scaleY: scrollYProgress }}
                className="snap-center"
                // The rotateX can be transformed like , rotateX: (1-scrollYProgress)*90 window
            >
            <Tabs
                defaultValue="work"
                className="w-[50vw]"
            >
                <TabsList className="grid grid-cols-2 w-[50vw] h-fit bg-transparent text-wrap">
                    <TabsTrigger className="text-[1.75rem] w-full" value="work">Work</TabsTrigger>
                    <TabsTrigger className="text-[1.75rem] w-full" value="education">Education</TabsTrigger>
                </TabsList>
                <TabsContent value="work">
                    <Card className="bg-transparent ">
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
                </TabsContent>
                <TabsContent value="education">
                    <Card className="bg-transparent">
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
                </TabsContent>
            </Tabs>
            </motion.div>
            <p className="absolute -rotate-90 left-1 text-[3rem] text-slate-200 opacity-50 font-extrabold tracking-tighter">I.Work</p>
        </div>
    )
}

const CardCustomItem = ({dates, companyLogo, companyName, jobTitle, sectionSubtitle, achievements, chips}) => {
    return (
        <CardContent className="p-5 w-inherit">
            <CardDescription className="text-slate-300 text-[1.25rem] font-light">{dates}</CardDescription>
            <div className="flex gap-3 items-center h-fit py-3">
                <span className=" h-[5vw] aspect-[2/2] rounded-md">
                    <Image className="rounded-md" style={{objectFit: "fill"}} src={companyLogo} alt="Switchboard Logo" />
                </span>
                <CardTitle className="text-[1.75rem] font-medium text-white">{companyName}</CardTitle>
            </div>
            <CardDescription className="text-slate-300 text-[1.25rem] font-light">{jobTitle}</CardDescription>
            <CardTitle className="text-[1.5rem] font-normal text-white">{sectionSubtitle}</CardTitle>
            <CardDescription>
                <ul className="list-inside list-disc text-slate-200 text-[1.25rem] pl-[1vw]">
                {
                    achievements.map((achievement, id) => {
                        return (
                            <li className="p-[1vw] text-wrap leading-[2rem]" key={id}>{achievement}</li>
                        )
                    })
                }
                </ul>
                <div className="flex gap-2">
                    {
                        chips && chips.map((chip, id) => {
                            return (
                                <Badge className="text-[1rem] py-[0.5vw]" key={id}>{chip}</Badge>
                            )
                        }) 
                    }
                </div>
            </CardDescription>
            
        </CardContent>
    )
}