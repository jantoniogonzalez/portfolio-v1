'use client'
import React, { useState } from "react";
import GsapMagnetic from "./GsapMagnetic";
import { useTransform , motion } from "motion/react";
import Link from "next/link";

export default function Hero({id, setIsTitleHovered, setIsSubtitleHovered}) {
    const [isNameHovered, setIsNameHovered] = useState(false);
    const [isJobTitleHovered, setIsJobTitleHovered] = useState(false);
    const [isCityHovered, setIsCityHovered] = useState(false);

    const titleContainer = {
        hidden: { opacity: 0.5, scale: 0.5, rotateX: 90 },
        show: {
            opacity: 1,
            scale: 1,
            rotateX: 0,
            transition: {
                type: "spring",
                staggerChildren: 0.5,
                duration: 1.5,
                bounce: 0.1,
                stiffness: 15,
            }
        }
    }

    const titleItem = {
        hidden: { opacity: 0.5, scale: 0.5, rotateX: 90 },
        show: {
            rotateX: 0,
            opacity: 1,
            scale: 1
        }
    }

    const nameWritingContainer = {
        hidden: {  opacity: 0,  rotateY: 0, rotateZ: -15},
        show: {
            opacity: 1,
            rotateY: 0,
            transition: {
                type: "tween",
                duration: 0.4,
                ease: [0.76, 0, 0.24, 1],
                staggerChildren: 0.05,
                delay: 0.1
            }
        }
    }

    const nameWritingItem = {
        hidden: { opacity: 0,  rotateY: -90},
        show: {
            opacity: 1,
            rotateY: 0,
        }
    }

    const laughterContainer = {
        hidden: { opacity: 0, rotateX: 90, rotateZ: 15, y: "25%"},
        show: {
            opacity: 1,
            rotateX: 0,
            transition: {
                type: "tween",
                duration: 0.4,
                ease: [0.76, 0, 0.24, 1],
                delay: 1.2
            }
        }
    }

    const roleAnnotationContainer = {
        hidden: { opacity: 0, y: "-2rem", x: "-8rem"},
        show: {
            opacity: 1,
            transition: {
                delay: 0.15,
                type: "tween",
                duration: 0.2,
                ease: [0.76, 0, 0.24, 1],
                staggerChildren: 0.05,
            }
        }
    }

    const roleAnnotationItem = {
        hidden: { opacity: 0,  rotateY: -90},
        show: {
            opacity: 1,
            rotateY: 0,
        }
    }

    // const textDecorationLineJobTitle =  useTransform(
    //     isJobTitleHovered,
    //     [false, true],
    //     ["none", "underline"]
    // )

    return (
        <div id={id} className="h-[100vh] grid grid-cols-1 items-center justify-center overflow-x-hidden">
            <motion.div
                className="z-[2] max-w-[100vw] mb-0"
                variants={titleContainer}
                initial="hidden"
                animate="show"
            >
                <div className="w-full flex justify-center items-center relative">
                    <motion.h1
                        onMouseEnter={() => {setIsTitleHovered(true); setIsNameHovered(true)}}
                        onMouseLeave={() => {setIsTitleHovered(false); setIsNameHovered(false)}}
                        className="text-[6rem] tracking-[-0.5rem] text-center text-white mb-3 font-bold w-fit"
                        variants={titleItem}
                    >
                        JUAN GONZALEZ
                    </motion.h1>
                    <div
                        className="absolute w-[80%] lg:w-[60%] top-[-30%] md:top-[-45%] flex justify-between font-handwriting text-[#f5c63f] text-[2rem]"
                    >
                        <motion.div
                            className="relative flex items-start text-center top-[-30%] md:top-[-45%] "
                            variants={nameWritingContainer}
                            initial="hidden"
                            animate={isNameHovered ? "show" : "hidden"}
                        >
                            {
                                    "he be number juan!".split("").map((letter, id) => {
                                        return (
                                            <motion.span
                                                className="whitespace-pre"
                                                variants={nameWritingItem}
                                                key={id}
                                            >
                                                {letter}
                                            </motion.span>
                                        )
                                    })
                            }

                        </motion.div>
                        <motion.div
                            className="relative"
                            initial="hidden"
                            animate={isNameHovered ? "show" : "hidden"}
                            variants={laughterContainer}
                        >
                            *laughter*
                        </motion.div>
                    </div>
                    
                </div>
                <div className="w-full flex justify-center items-center">
                    <div className="absolute w-full pointer-events-none flex justify-center text-center">
                        <motion.div
                            className="relative font-handwriting text-[#356fdb] text-[2rem]"
                            variants={roleAnnotationContainer}
                            initial="hidden"
                            animate={isJobTitleHovered ? "show": "hidden"}
                        >
                            {
                                `or "full stack"?`.split("").map((letter, id) => {
                                    return (
                                        <motion.span
                                            className="whitespace-pre"
                                            variants={roleAnnotationItem}
                                            key={id}
                                        >
                                            {letter}
                                        </motion.span>
                                    )
                                })
                            }
                        </motion.div>
                    </div>
                    <motion.h3
                        onMouseEnter={() => {setIsSubtitleHovered(true); setIsJobTitleHovered(true);}}
                        onMouseLeave={() => {setIsSubtitleHovered(false); setIsJobTitleHovered(false);}}
                        className="text-[2rem] flex tracking-tight whitespace-pre text-center text-white w-fit"
                        variants={titleItem}  
                    >
                        <motion.div
                            initial={{textDecorationLine: "none"}}
                            animate={isJobTitleHovered ? { textDecorationLine: "line-through"} : { textDecorationLine: "none"}}
                            transition={{
                                delay: 0.15,
                                type: "tween",
                                duration: 0.5,
                                ease: [0.76, 0, 0.24, 1],
                            }}
                            style={{ textDecorationColor: "#356fdb", textDecorationThickness: "0.4rem" }}>
                            Fullstack
                        </motion.div> Software Developer
                    </motion.h3>
                </div>
                <div className="w-full flex justify-center items-center">
                    <motion.h3
                        onMouseEnter={() => {setIsSubtitleHovered(true)}}
                        onMouseLeave={() => {setIsSubtitleHovered(false)}}
                        className="text-[2rem] tracking-tight text-center text-white w-fit"
                        variants={titleItem}
                    >
                        Based in Vancouver, BC
                    </motion.h3>
                </div>
                    
                <motion.div
                    className="flex pt-[2rem] mb-[1rem] justify-center w-full relative z-[0]"
                    variants={titleItem}
                >
                    <GsapMagnetic>
                        <a
                            href="/files/resume.pdf"
                            alt="Resume"
                            rel="noopener noreferrer"
                            target="_blank"
                            onMouseEnter={() => {setIsSubtitleHovered(true)}}
                            onMouseLeave={() => {setIsSubtitleHovered(false)}}
                        >
                            <svg className="p-3 mx-[1vw] w-[7rem] h-[7rem] fill-white stroke-white hover:stroke-[#f5c63f] hover:fill-[#f5c63f]" width="80" height="100" fill="none" viewBox="2 -12 60 85" xmlns="http://www.w3.org/2000/svg">
                                <circle className="fill-none" cx="31.636" cy="31.9655" r="30" strokeWidth="3"/>
                                <path className="fill-inherit" d="M21.4957 31.4656C21.4957 32.3189 21.6891 33.0589 22.0757 33.6856C22.4624 34.2989 22.9691 34.7656 23.5957 35.0856C24.2357 35.4056 24.9357 35.5656 25.6957 35.5656C26.3624 35.5656 26.9491 35.4789 27.4557 35.3056C27.9624 35.1322 28.4157 34.9056 28.8157 34.6256C29.2157 34.3456 29.5691 34.0456 29.8757 33.7256V37.3656C29.3157 37.8056 28.7024 38.1522 28.0357 38.4056C27.3691 38.6589 26.5224 38.7856 25.4957 38.7856C24.3757 38.7856 23.3424 38.6122 22.3957 38.2656C21.4491 37.9189 20.6357 37.4189 19.9557 36.7656C19.2757 36.1122 18.7491 35.3389 18.3757 34.4456C18.0024 33.5522 17.8157 32.5589 17.8157 31.4656C17.8157 30.3722 18.0024 29.3789 18.3757 28.4856C18.7491 27.5922 19.2757 26.8189 19.9557 26.1656C20.6357 25.5122 21.4491 25.0122 22.3957 24.6656C23.3424 24.3189 24.3757 24.1456 25.4957 24.1456C26.5224 24.1456 27.3691 24.2722 28.0357 24.5256C28.7024 24.7789 29.3157 25.1256 29.8757 25.5656V29.2056C29.5691 28.8856 29.2157 28.5856 28.8157 28.3056C28.4157 28.0122 27.9624 27.7856 27.4557 27.6256C26.9491 27.4522 26.3624 27.3656 25.6957 27.3656C24.9357 27.3656 24.2357 27.5256 23.5957 27.8456C22.9691 28.1656 22.4624 28.6322 22.0757 29.2456C21.6891 29.8589 21.4957 30.5989 21.4957 31.4656ZM38.2062 32.8256L41.6262 24.4656H45.5862L38.2062 39.3456L30.8462 24.4656H34.7862L38.2062 32.8256Z" fill="white"/>
                            </svg> 
                        </a>
                    </GsapMagnetic>
                    <GsapMagnetic>
                        <a
                            href="https://www.linkedin.com/in/juan-antonio-gonzalez-gomez-12b310221/"
                            rel="noopener noreferrer"
                            target="_blank"
                            onMouseEnter={() => {setIsSubtitleHovered(true)}}
                            onMouseLeave={() => {setIsSubtitleHovered(false)}}
                        >
                            <svg className="p-5 mx-[1vw] w-[7rem] h-[7rem] fill-white hover:fill-[#356fdb]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="100" viewBox="0,0,250,250">
                                <g fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(5.12,5.12)"><path d="M9,4c-2.74952,0 -5,2.25048 -5,5v32c0,2.74952 2.25048,5 5,5h32c2.74952,0 5,-2.25048 5,-5v-32c0,-2.74952 -2.25048,-5 -5,-5zM9,6h32c1.66848,0 3,1.33152 3,3v32c0,1.66848 -1.33152,3 -3,3h-32c-1.66848,0 -3,-1.33152 -3,-3v-32c0,-1.66848 1.33152,-3 3,-3zM14,11.01172c-1.09522,0 -2.08078,0.32736 -2.81055,0.94141c-0.72977,0.61405 -1.17773,1.53139 -1.17773,2.51367c0,1.86718 1.61957,3.32281 3.67969,3.4668c0.0013,0.00065 0.0026,0.0013 0.00391,0.00195c0.09817,0.03346 0.20099,0.05126 0.30469,0.05273c2.27301,0 3.98828,-1.5922 3.98828,-3.52148c-0.00018,-0.01759 -0.00083,-0.03518 -0.00195,-0.05274c-0.10175,-1.90023 -1.79589,-3.40234 -3.98633,-3.40234zM14,12.98828c1.39223,0 1.94197,0.62176 2.00195,1.50391c-0.01215,0.85625 -0.54186,1.51953 -2.00195,1.51953c-1.38541,0 -2.01172,-0.70949 -2.01172,-1.54492c0,-0.41771 0.15242,-0.7325 0.47266,-1.00195c0.32023,-0.26945 0.83428,-0.47656 1.53906,-0.47656zM11,19c-0.55226,0.00006 -0.99994,0.44774 -1,1v19c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-5.86523v-13.13477c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM20,19c-0.55226,0.00006 -0.99994,0.44774 -1,1v19c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-10c0,-0.82967 0.22639,-1.65497 0.625,-2.19531c0.39861,-0.54035 0.90147,-0.86463 1.85742,-0.84766c0.98574,0.01695 1.50758,0.35464 1.90234,0.88477c0.39477,0.53013 0.61523,1.32487 0.61523,2.1582v10c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-10.73828c0,-2.96154 -0.87721,-5.30739 -2.38086,-6.89453c-1.50365,-1.58714 -3.59497,-2.36719 -5.80664,-2.36719c-2.10202,0 -3.70165,0.70489 -4.8125,1.42383v-0.42383c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM12,21h4v12.13477v4.86523h-4zM21,21h4v1.56055c0.00013,0.43 0.27511,0.81179 0.68291,0.94817c0.40781,0.13638 0.85714,-0.00319 1.11591,-0.34661c0,0 1.57037,-2.16211 5.01367,-2.16211c1.75333,0 3.25687,0.58258 4.35547,1.74219c1.0986,1.15961 1.83203,2.94607 1.83203,5.51953v9.73828h-4v-9c0,-1.16667 -0.27953,-2.37289 -1.00977,-3.35352c-0.73023,-0.98062 -1.9584,-1.66341 -3.47266,-1.68945c-1.52204,-0.02703 -2.77006,0.66996 -3.50195,1.66211c-0.73189,0.99215 -1.01562,2.21053 -1.01562,3.38086v9h-4z"></path></g></g>
                            </svg>
                        </a>
                    </GsapMagnetic>
                    <GsapMagnetic>
                        <a
                            href="https://github.com/jantoniogonzalez"
                            rel="noopener noreferrer"
                            target="_blank"
                            onMouseEnter={() => {setIsSubtitleHovered(true)}}
                            onMouseLeave={() => {setIsSubtitleHovered(false)}}
                        >
                            <svg className="p-5 mx-[1vw] w-[7rem] h-[7rem] fill-white hover:fill-[#c32d27]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="100" viewBox="0,0,250,250">
                                <g fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(5.12,5.12)"><path d="M25,2c-12.68866,0 -23,10.31134 -23,23c0,12.68867 10.31134,23 23,23c12.68867,0 23,-10.31133 23,-23c0,-12.68866 -10.31133,-23 -23,-23zM25,4c11.60734,0 21,9.39266 21,21c0,0.07137 -0.00515,0.14169 -0.00586,0.21289c-0.63961,-0.05904 -1.37863,-0.11511 -2.31836,-0.14844c-1.32872,-0.04712 -3.00352,-0.03347 -4.90234,0.06055c0.07041,-0.49035 0.11977,-0.98762 0.12109,-1.49805c0.09683,-1.87262 -0.53201,-3.62449 -1.55469,-5.17187c0.24707,-0.85373 0.5369,-1.93986 0.60938,-3.17187c0.0826,-1.40428 -0.03862,-2.96144 -1.16602,-4.01367l-0.28906,-0.26953h-0.39453c-2.68307,0 -4.51959,1.12321 -5.64258,2.01367c-1.6215,-0.62765 -3.44481,-1.01367 -5.45703,-1.01367c-2.02363,0 -3.86447,0.39142 -5.55273,1.01758c-1.12235,-0.89089 -2.96048,-2.01758 -5.64648,-2.01758h-0.39258l-0.28906,0.26758c-1.09819,1.01974 -1.19936,2.53418 -1.13086,3.93164c0.06041,1.23229 0.33345,2.35292 0.57617,3.24805c-1.03996,1.57759 -1.66406,3.37475 -1.66406,5.15234c0,0.51163 0.04758,1.01046 0.11719,1.50195c-1.80576,-0.08375 -3.41548,-0.09989 -4.69336,-0.05469c-0.9397,0.03324 -1.67878,0.08884 -2.31836,0.14844c-0.0006,-0.06534 -0.00586,-0.12983 -0.00586,-0.19531c0,-11.60733 9.39266,-21 21,-21zM14.39648,13.13086c2.01758,0.19118 3.53551,1.09211 4.23828,1.7168l0.46875,0.41406l0.57813,-0.23633c1.58145,-0.65119 3.34534,-1.02539 5.31836,-1.02539c1.97302,0 3.73739,0.37608 5.19922,1.01563l0.58594,0.25781l0.47852,-0.42578c0.70301,-0.6249 2.22351,-1.5261 4.24219,-1.7168c0.2684,0.44498 0.50163,1.07781 0.44531,2.03516c-0.0674,1.14572 -0.37387,2.39364 -0.60547,3.13477l-0.15039,0.48242l0.29883,0.4082c0.98947,1.34928 1.49398,2.80953 1.4082,4.35352l-0.00195,0.02734v0.02734c0,2.49545 -0.89861,4.49273 -2.8125,5.97266c-1.91384,1.47993 -4.93523,2.42773 -9.1875,2.42773c-4.25227,0 -7.27556,-0.94781 -9.18945,-2.42773c-1.91389,-1.47993 -2.81055,-3.4772 -2.81055,-5.97266c0,-1.46471 0.52892,-3.07601 1.50586,-4.4082l0.29297,-0.39844l-0.14062,-0.47461c-0.23173,-0.78787 -0.51577,-2.06426 -0.57227,-3.2168c-0.04699,-0.95862 0.17989,-1.56453 0.41016,-1.9707zM8.88477,26.02148c0.70669,0.00903 1.51669,0.04717 2.32813,0.08789c0.07753,0.3118 0.16593,0.61852 0.27344,0.91797c-3.30736,0.06975 -5.7816,0.40233 -7.30664,0.6875c-0.06448,-0.50035 -0.11584,-1.00482 -0.14453,-1.51562c1.12705,-0.10696 2.71584,-0.20499 4.84961,-0.17773zM41.11523,26.03711c2.13229,-0.02708 3.72049,0.07105 4.84766,0.17773c-0.02866,0.50348 -0.07914,1.00082 -0.14258,1.49414c-1.57954,-0.28977 -4.12064,-0.6223 -7.51367,-0.67578c0.1053,-0.29353 0.19299,-0.59498 0.26953,-0.90039c0.89512,-0.04798 1.76839,-0.08592 2.53906,-0.0957zM11.91211,28.01953c0.59674,1.1958 1.44941,2.26349 2.57617,3.13477c1.54054,1.19123 3.54334,2.02354 5.98828,2.46875c-0.31986,0.32865 -0.61078,0.68955 -0.86914,1.07031l-0.06055,-0.05273c0.0055,-0.0063 -0.49713,0.24525 -1.24805,0.3125c-0.75092,0.06725 -1.67721,0.04688 -2.49805,0.04688c-1.225,0 -1.76457,-0.57879 -2.62695,-1.63281c-0.47755,-0.64363 -1.05973,-1.16486 -1.625,-1.56055c-0.57881,-0.40517 -1.07257,-0.69113 -1.68359,-0.79297l-0.08203,-0.01367h-0.08398c-0.46667,0 -0.91824,0.03379 -1.33984,0.51563c-0.2108,0.24092 -0.3561,0.68694 -0.26172,1.06445c0.09438,0.37752 0.3332,0.6095 0.54688,0.75195c1.36672,0.91115 1.60826,2.71448 2.46484,4.31836c0.79992,1.59392 2.52629,2.34961 4.29102,2.34961h2.59961v4.80273c-7.03219,-2.4822 -12.33532,-8.59812 -13.66797,-16.09961c1.5309,-0.28835 4.09451,-0.63502 7.58008,-0.68359zM37.88281,28.02734c3.56273,0.0305 6.19824,0.37672 7.78711,0.66992c-1.33087,7.50424 -6.63585,13.6226 -13.66992,16.10547v-5.20312c0,-1.58457 -0.52036,-3.3319 -1.42578,-4.78906c-0.2749,-0.44241 -0.59827,-0.86081 -0.95898,-1.23633c2.31522,-0.45738 4.21713,-1.2754 5.69727,-2.41992c1.12432,-0.86939 1.97509,-1.93387 2.57031,-3.12695zM23.69922,34.09961h2.80078c0.81282,0 1.68042,0.64779 2.375,1.76563c0.69458,1.11783 1.125,2.61894 1.125,3.73438v5.79883c-1.60259,0.3908 -3.27621,0.60156 -5,0.60156c-1.72379,0 -3.39741,-0.21077 -5,-0.60156v-5.79883c0,-1.09074 0.46783,-2.5883 1.20898,-3.71094c0.74116,-1.12264 1.67741,-1.78906 2.49023,-1.78906zM12.30859,35.28125c0.86577,0.89801 1.91393,1.71875 3.49219,1.71875c0.77917,0 1.7517,0.02807 2.67578,-0.05469c0.00329,-0.00029 0.00648,-0.00166 0.00977,-0.00195c-0.12175,0.35 -0.21258,0.70217 -0.28906,1.05664h-2.79687c-1.23333,0 -2.10462,-0.44557 -2.50586,-1.24805l-0.00781,-0.01367l-0.00586,-0.01172c-0.1644,-0.30537 -0.38021,-0.91597 -0.57226,-1.44531z"></path></g></g>
                            </svg>
                        </a>
                    </GsapMagnetic>
                </motion.div>
                <motion.div
                    className="absolute w-full flex justify-center overflow-hidden"
                    variants={titleItem}    
                >
                    <GsapMagnetic>
                        <Link
                            href="#experience"
                            className="p-3 flex flex-col justify-center items-center"
                            scroll={true}
                            onMouseEnter={() => {setIsSubtitleHovered(true)}}
                            onMouseLeave={() => {setIsSubtitleHovered(false)}}
                        >
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="15.0002" cy="14.6389" r="13.4543" stroke="#F0F0F0" strokeWidth="2"/>
                                <path d="M14.2929 20.8897C14.6834 21.2802 15.3166 21.2802 15.7071 20.8897L22.0711 14.5258C22.4616 14.1352 22.4616 13.5021 22.0711 13.1116C21.6805 12.721 21.0474 12.721 20.6569 13.1116L15 18.7684L9.34315 13.1115C8.95262 12.721 8.31946 12.721 7.92894 13.1115C7.53841 13.5021 7.53841 14.1352 7.92893 14.5258L14.2929 20.8897ZM14 18.981L14 20.1826L16 20.1826L16 18.981L14 18.981Z" fill="#F0F0F0"/>
                                <path d="M14.4697 16.1692C14.7626 16.4621 15.2374 16.4621 15.5303 16.1692L20.3033 11.3963C20.5962 11.1034 20.5962 10.6285 20.3033 10.3356C20.0104 10.0427 19.5355 10.0427 19.2426 10.3356L15 14.5783L10.7574 10.3356C10.4645 10.0427 9.98959 10.0427 9.6967 10.3356C9.40381 10.6285 9.40381 11.1034 9.6967 11.3963L14.4697 16.1692ZM14.25 14.6389L14.25 15.6389L15.75 15.6389L15.75 14.6389L14.25 14.6389Z" fill="#F0F0F0"/>
                            </svg>
                            <p className="text-white">Scroll To Explore</p>
                        </Link>
                    </GsapMagnetic>
                </motion.div>
            </motion.div>            
        </div>
    )
}