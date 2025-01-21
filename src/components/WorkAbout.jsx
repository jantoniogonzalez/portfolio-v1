'use client'
import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import SwitchboardIcon from "../../public/images/switchboard-icon.png"
import SFUIcon from "../../public/images/SFU-block-logo.png"
import Image from "next/image"  

export default function WorkAbout() {
    return (
        <div className="h-[100vw] flex justify-center">
            <Tabs defaultValue="work" className="max-w-[70vw]">
                <TabsList className="min-w-[50vw] max-w-[70vw] h-fit bg-transparent">
                    <TabsTrigger className="text-[3vw] w-full bg-transparent" value="work">Work</TabsTrigger>
                    <TabsTrigger className="text-[3vw] w-full" value="education">Education</TabsTrigger>
                </TabsList>
                <TabsContent value="work">
                    <Card className="bg-transparent">
                        {/* <CardContent>
                            <CardDescription className="text-slate-300 text-[2vw] font-light">May 2023 - December 2023</CardDescription>
                            <div className="flex gap-3 items-center h-fit">
                                <span className=" h-[5vw] aspect-[2/2] rounded-sm ">
                                    <Image className="border-solid border-1 border-black" style={{objectFit: "cover"}} src={SwitchboardIcon} alt="Switchboard Logo" />
                                </span>
                                <CardTitle className="text-[2.5vw] font-medium text-white">Switchboard</CardTitle>
                            </div>
                            <CardDescription className="text-slate-300 text-[2vw] font-light">Web Software Developer</CardDescription>
                        </CardContent> */}
                        <CardCustomItem
                            dates="May 2023 - December 2023"
                            companyLogo={SwitchboardIcon}
                            companyName="Switchboard"
                            jobTitle="Web Software Developer"
                            achievements={["Redesigned", "Created", "Led"]}
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
                            achievements={["Hello", "Hello", "Hello"]}
                        />
                    </Card>
                </TabsContent>
            </Tabs>
            {/* <h2 className="text-[4.5vw] text-white">Work & Education</h2> */}
        </div>
    )
}

const CardCustomItem = ({dates, companyLogo, companyName, jobTitle, achievements}) => {
    return (
        <CardContent>
            <CardDescription className="text-slate-300 text-[2vw] font-light">{dates}</CardDescription>
            <div className="flex gap-3 items-center h-fit">
                <span className=" h-[5vw] aspect-[2/2] rounded-md">
                    <Image className="border-solid border-1 border-black " style={{objectFit: "cover"}} src={companyLogo} alt="Switchboard Logo" />
                </span>
                <CardTitle className="text-[2.5vw] font-medium text-white">{companyName}</CardTitle>
            </div>
            <CardDescription className="text-slate-300 text-[2vw] font-light">{jobTitle}</CardDescription>
            <CardDescription>Example: {achievements[0]}</CardDescription>
            {
                achievements.map((achievement, id) => {
                    return(
                        <CardContent key={id}>{achievement}</CardContent>
                    )
                })
            }
            <CardDescription>
                <ul>
                {
                    achievements.forEach((achievement, id) => {
                        return (
                            <li key={id}>{achievement}</li>
                        )
                    })
                }
                </ul>
            </CardDescription>
            
        </CardContent>
    )
}