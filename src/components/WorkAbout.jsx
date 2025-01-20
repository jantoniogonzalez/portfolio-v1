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
  


export default function WorkAbout() {
    return (
        <div className="h-[100vw] flex justify-center">
            {/* <Tabs defaultValue="work" className="w-[70vw]">
                <TabsList>
                    <TabsTrigger value="work">Work</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                </TabsList>
                <TabsContent value="work">
                    <Card>
                        <CardContent>
                            <CardTitle>Switchboard</CardTitle>

                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="education">
                    <Card>

                    </Card>
                </TabsContent>
            </Tabs> */}
            <h2 className="text-[4.5vw] text-white">Work & Education</h2>
        </div>
    )
}