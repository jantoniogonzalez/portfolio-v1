'use client'
import React from "react";
import GsapMagnetic from "../GsapMagnetic";
import { Badge } from "./badge";

export default function MagneticBagde({content, className, num = 0}) {
    const colors = ["#f5c63f", "#356fdb", "#c32d27"];
    let customColor;
    switch (num %3) {
        case 1:
            customColor = " hover:bg-[#356fdb] hover:text-black z-[1]";
            break;
        case 2:
            customColor = " hover:bg-[#c32d27] hover:text-black z-[1]";
            break;
        default:
            customColor = " hover:bg-[#f5c63f] hover:text-black z-[1]";
            break;
        
    }
    const customClass = className + customColor;
    return(
        <GsapMagnetic>
            <Badge className={customClass}>{content}</Badge>
        </GsapMagnetic>
    )
}