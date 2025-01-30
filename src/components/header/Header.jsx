'use client'
import React, { useState } from "react";
import { motion } from "motion/react";
import GsapMagnetic from "../GsapMagnetic";
import Link from "next/link";

export default function Header({setIsSubtitleHovered, setIsTitleHovered}) {

    const [isActive, setIsActive] = useState(false);

    const headerContainer = {
        hidden: { y: -5, opacity: 0 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                type: 'spring',
                delay: 1.75,
                stiffness: 25,
                bounce: 0.1,
            }
        }
    }

    const headerItem = {
        hidden: { y: -5, opacity: 0 },
        show: {
            opacity: 1,
            y: 0
        }
    }
    return (
        <motion.header
            variants={headerContainer}
            initial="hidden"
            animate="show"
            className="fixed px-[2rem] top-5 w-full flex align-center z-10"    
        >
            <motion.div
                variants={headerItem}
                className="fixed p-2"
            >
                
                    <Link
                        href="#hero"
                        as=""
                        scroll={true}
                        onMouseEnter={() => {setIsSubtitleHovered(true)}}
                        onMouseLeave={() => {setIsSubtitleHovered(false)}}
                    >
                        <GsapMagnetic>
                        <motion.svg variants={headerItem} className="w-[2rem] h-[3rem]" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.69699 1.17995H4.01699C4.33699 1.17995 4.65033 1.21995 4.95699 1.29995C5.26366 1.36662 5.53699 1.49328 5.77699 1.67995C6.01699 1.85328 6.21033 2.09328 6.35699 2.39995C6.50366 2.70662 6.57699 3.09995 6.57699 3.57995V10.52C6.57699 11.0133 6.49699 11.4133 6.33699 11.72C6.19033 12.0266 5.99033 12.2666 5.73699 12.44C5.49699 12.6133 5.21033 12.7333 4.87699 12.8C4.55699 12.8666 4.23033 12.9 3.89699 12.9H3.69699V1.17995ZM0.516992 13.78C0.516992 13.3666 0.596992 13.0333 0.756992 12.78C0.916992 12.5133 1.11033 12.3066 1.33699 12.16C1.56366 12.0133 1.80366 11.92 2.05699 11.88C2.31033 11.8266 2.53033 11.8 2.71699 11.8C2.87699 11.8 3.01033 11.8133 3.11699 11.84V12.76C3.11699 13.04 3.18366 13.2466 3.31699 13.38C3.45033 13.5133 3.61699 13.58 3.81699 13.58C4.05699 13.58 4.27033 13.5 4.45699 13.34C4.49699 13.4466 4.51699 13.5466 4.51699 13.64C4.53033 13.72 4.53699 13.8133 4.53699 13.92C4.53699 14.08 4.49699 14.2666 4.41699 14.48C4.35033 14.68 4.23699 14.8733 4.07699 15.06C3.93033 15.2333 3.73033 15.3866 3.47699 15.52C3.23699 15.64 2.94366 15.7 2.59699 15.7C2.23699 15.7 1.92366 15.64 1.65699 15.52C1.40366 15.4 1.19033 15.2533 1.01699 15.08C0.856992 14.8933 0.730326 14.6866 0.636992 14.46C0.556992 14.2333 0.516992 14.0066 0.516992 13.78ZM10.1525 15.7H9.95246C9.60579 15.7 9.27246 15.6666 8.95246 15.6C8.63246 15.5333 8.34579 15.4133 8.09246 15.24C7.85246 15.0666 7.65246 14.8266 7.49246 14.52C7.34579 14.2133 7.27246 13.8133 7.27246 13.32V3.57995C7.27246 3.09995 7.34579 2.70662 7.49246 2.39995C7.63913 2.09328 7.83246 1.85328 8.07246 1.67995C8.31246 1.49328 8.58579 1.36662 8.89246 1.29995C9.19913 1.21995 9.51246 1.17995 9.83246 1.17995H10.1525V15.7ZM14.4525 13.24C14.4525 13.7466 14.3658 14.16 14.1925 14.48C14.0325 14.8 13.8258 15.0533 13.5725 15.24C13.3325 15.4133 13.0658 15.5333 12.7725 15.6C12.4925 15.6666 12.2325 15.7 11.9925 15.7H11.5525V11.62C11.5525 11.34 11.5325 11.08 11.4925 10.84C11.4525 10.5866 11.3191 10.46 11.0925 10.46C10.9725 10.46 10.8791 10.4733 10.8125 10.5C10.7458 10.5266 10.6791 10.5733 10.6125 10.64L10.5525 10.42C10.5125 10.2866 10.4925 10.0866 10.4925 9.81995C10.4925 9.43328 10.6458 9.07995 10.9525 8.75995C11.2591 8.43995 11.7125 8.27995 12.3125 8.27995C12.9791 8.27995 13.5058 8.49328 13.8925 8.91995C14.2791 9.33328 14.4658 9.95995 14.4525 10.8V13.24ZM14.5125 3.07995C14.5125 3.50662 14.4325 3.84662 14.2725 4.09995C14.1125 4.35328 13.9191 4.55328 13.6925 4.69995C13.4658 4.84662 13.2258 4.94662 12.9725 4.99995C12.7191 5.03995 12.4991 5.05995 12.3125 5.05995C12.1525 5.05995 12.0191 5.04662 11.9125 5.01995V4.09995C11.9125 3.81995 11.8458 3.61328 11.7125 3.47995C11.5791 3.34662 11.4125 3.27995 11.2125 3.27995C10.9591 3.27995 10.7458 3.35995 10.5725 3.51995C10.5325 3.41328 10.5058 3.31995 10.4925 3.23995C10.4925 3.14662 10.4925 3.04662 10.4925 2.93995C10.4925 2.77995 10.5258 2.59995 10.5925 2.39995C10.6725 2.18662 10.7858 1.99328 10.9325 1.81995C11.0925 1.63328 11.2925 1.47995 11.5325 1.35995C11.7858 1.22662 12.0858 1.15995 12.4325 1.15995C12.7925 1.15995 13.0991 1.21995 13.3525 1.33995C13.6191 1.45995 13.8325 1.61328 13.9925 1.79995C14.1658 1.97328 14.2925 2.17995 14.3725 2.41995C14.4658 2.64662 14.5125 2.86662 14.5125 3.07995Z" fill="white"/>
                            <path d="M13.2737 18.9199C13.2737 18.9599 13.2754 18.9982 13.2788 19.0349C13.2856 19.0716 13.2958 19.1049 13.3094 19.1349C13.3264 19.1616 13.3485 19.1849 13.3757 19.2049C13.4063 19.2216 13.4471 19.2299 13.4981 19.2299C13.5253 19.2299 13.5525 19.2266 13.5797 19.2199C13.6103 19.2099 13.6375 19.1949 13.6613 19.1749C13.6749 19.2016 13.6834 19.2282 13.6868 19.2549C13.6902 19.2782 13.6919 19.3032 13.6919 19.3299C13.6919 19.4366 13.646 19.5249 13.5542 19.5949C13.4624 19.6649 13.3519 19.6999 13.2227 19.6999C13.0187 19.6999 12.8623 19.6466 12.7535 19.5399C12.6447 19.4332 12.5903 19.2999 12.5903 19.1399V17.7499C12.5903 17.6399 12.6107 17.5482 12.6515 17.4749C12.6957 17.3982 12.7501 17.3366 12.8147 17.2899C12.8827 17.2432 12.9558 17.2099 13.034 17.1899C13.1156 17.1699 13.1955 17.1599 13.2737 17.1599V18.9199ZM14.4365 19.1099C14.4365 19.2266 14.4144 19.3232 14.3702 19.3999C14.3294 19.4732 14.275 19.5332 14.207 19.5799C14.1424 19.6232 14.0693 19.6549 13.9877 19.6749C13.9061 19.6916 13.8279 19.6999 13.7531 19.6999V17.9399C13.7531 17.8999 13.7497 17.8616 13.7429 17.8249C13.7395 17.7882 13.7293 17.7566 13.7123 17.7299C13.6987 17.6999 13.6766 17.6766 13.646 17.6599C13.6188 17.6399 13.5797 17.6299 13.5287 17.6299C13.5015 17.6299 13.4726 17.6349 13.442 17.6449C13.4148 17.6516 13.3893 17.6649 13.3655 17.6849C13.3519 17.6582 13.3434 17.6332 13.34 17.6099C13.3366 17.5832 13.3349 17.5566 13.3349 17.5299C13.3349 17.4232 13.3808 17.3349 13.4726 17.2649C13.5644 17.1949 13.6749 17.1599 13.8041 17.1599C14.0081 17.1599 14.1645 17.2116 14.2733 17.3149C14.3821 17.4149 14.4365 17.5599 14.4365 17.7499V19.1099Z" fill="white"/>
                            <path d="M11.3862 17.1599H11.4423C11.6191 17.1599 11.767 17.2066 11.886 17.2999C12.0084 17.3932 12.0696 17.5416 12.0696 17.7449V19.6999H12.039C11.9608 19.6999 11.8826 19.6899 11.8044 19.6699C11.7296 19.6499 11.6599 19.6182 11.5953 19.5749C11.5341 19.5282 11.4831 19.4699 11.4423 19.3999C11.4049 19.3266 11.3862 19.2366 11.3862 19.1299V17.1599Z" fill="white"/>
                            <path d="M10.1921 17.9399C10.1921 17.8999 10.1887 17.8616 10.1819 17.8249C10.1785 17.7882 10.1683 17.7566 10.1513 17.7299C10.1377 17.6999 10.1156 17.6766 10.085 17.6599C10.0578 17.6399 10.0187 17.6299 9.9677 17.6299C9.9405 17.6299 9.9116 17.6349 9.881 17.6449C9.8538 17.6516 9.8283 17.6649 9.8045 17.6849C9.7909 17.6582 9.7824 17.6332 9.779 17.6099C9.7756 17.5832 9.7739 17.5566 9.7739 17.5299C9.7739 17.4232 9.8232 17.3349 9.9218 17.2649C10.0204 17.1949 10.1462 17.1599 10.2992 17.1599C10.4828 17.1599 10.6239 17.2149 10.7225 17.3249C10.8245 17.4316 10.8755 17.5899 10.8755 17.7999V19.6999H10.8449C10.6409 19.6999 10.4811 19.6532 10.3655 19.5599C10.2499 19.4632 10.1921 19.3099 10.1921 19.0999V17.9399ZM9.0293 17.1599H9.0854C9.2622 17.1599 9.4101 17.2066 9.5291 17.2999C9.6515 17.3932 9.7127 17.5416 9.7127 17.7449V19.6999H9.6821C9.6039 19.6999 9.5257 19.6899 9.4475 19.6699C9.3727 19.6499 9.303 19.6182 9.2384 19.5749C9.1772 19.5282 9.1262 19.4699 9.0854 19.3999C9.048 19.3266 9.0293 19.2366 9.0293 19.1299V17.1599Z" fill="white"/>
                            <path d="M7.40655 18.9199C7.40655 18.9599 7.40825 18.9982 7.41165 19.0349C7.41845 19.0716 7.42865 19.1049 7.44225 19.1349C7.45925 19.1616 7.48135 19.1849 7.50855 19.2049C7.53915 19.2216 7.57995 19.2299 7.63095 19.2299C7.65815 19.2299 7.68535 19.2266 7.71255 19.2199C7.74315 19.2099 7.77035 19.1949 7.79415 19.1749C7.80775 19.2016 7.81625 19.2282 7.81965 19.2549C7.82305 19.2782 7.82475 19.3032 7.82475 19.3299C7.82475 19.4366 7.77885 19.5249 7.68705 19.5949C7.59525 19.6649 7.48475 19.6999 7.35555 19.6999C7.15155 19.6999 6.99515 19.6466 6.88635 19.5399C6.77755 19.4332 6.72314 19.2999 6.72314 19.1399V17.7499C6.72314 17.6399 6.74354 17.5482 6.78434 17.4749C6.82855 17.3982 6.88295 17.3366 6.94755 17.2899C7.01555 17.2432 7.08865 17.2099 7.16685 17.1899C7.24845 17.1699 7.32835 17.1599 7.40655 17.1599V18.9199ZM8.56936 19.1099C8.56936 19.2266 8.54726 19.3232 8.50306 19.3999C8.46226 19.4732 8.40786 19.5332 8.33986 19.5799C8.27525 19.6232 8.20215 19.6549 8.12055 19.6749C8.03895 19.6916 7.96075 19.6999 7.88595 19.6999V17.9399C7.88595 17.8999 7.88255 17.8616 7.87575 17.8249C7.87235 17.7882 7.86215 17.7566 7.84515 17.7299C7.83155 17.6999 7.80945 17.6766 7.77885 17.6599C7.75165 17.6399 7.71255 17.6299 7.66155 17.6299C7.63435 17.6299 7.60545 17.6349 7.57485 17.6449C7.54765 17.6516 7.52215 17.6649 7.49835 17.6849C7.48475 17.6582 7.47625 17.6332 7.47285 17.6099C7.46945 17.5832 7.46775 17.5566 7.46775 17.5299C7.46775 17.4232 7.51365 17.3349 7.60545 17.2649C7.69725 17.1949 7.80775 17.1599 7.93695 17.1599C8.14095 17.1599 8.29735 17.2116 8.40616 17.3149C8.51496 17.4149 8.56936 17.5599 8.56936 17.7499V19.1099Z" fill="white"/>
                            <path d="M5.93731 18.9348C5.93731 18.9682 5.93731 19.0032 5.93731 19.0398C5.94071 19.0765 5.94751 19.1098 5.95771 19.1398C5.97131 19.1698 5.99001 19.1948 6.01381 19.2148C6.03761 19.2348 6.07161 19.2448 6.11581 19.2448C6.17021 19.2448 6.21101 19.2315 6.23821 19.2048C6.26881 19.1748 6.29091 19.1498 6.30451 19.1298C6.31131 19.1498 6.31641 19.1798 6.31981 19.2198C6.32661 19.2598 6.33001 19.2932 6.33001 19.3198C6.33001 19.4465 6.28581 19.5415 6.19741 19.6048C6.11241 19.6682 5.99851 19.6998 5.85571 19.6998C5.66871 19.6998 5.52081 19.6432 5.41201 19.5298C5.30661 19.4165 5.25391 19.2298 5.25391 18.9698V16.6748C5.25391 16.5915 5.26411 16.5132 5.28451 16.4398C5.30831 16.3665 5.34401 16.3032 5.39161 16.2498C5.43921 16.1932 5.50041 16.1498 5.57521 16.1198C5.65341 16.0865 5.74691 16.0698 5.85571 16.0698C5.86931 16.0698 5.88291 16.0715 5.89651 16.0748C5.91011 16.0748 5.92371 16.0748 5.93731 16.0748V18.9348ZM6.02401 17.1848H6.03421C6.04101 17.1848 6.05631 17.1848 6.08011 17.1848C6.10391 17.1815 6.14131 17.1798 6.19231 17.1798H6.42181C6.42521 17.1898 6.42691 17.2148 6.42691 17.2548C6.42691 17.3815 6.39631 17.4815 6.33511 17.5548C6.27391 17.6248 6.17021 17.6598 6.02401 17.6598V17.1848Z" fill="white"/>
                            <path d="M4.11105 17.9399C4.11105 17.8999 4.10765 17.8616 4.10085 17.8249C4.09745 17.7882 4.08725 17.7566 4.07025 17.7299C4.05665 17.6999 4.03455 17.6766 4.00395 17.6599C3.97675 17.6399 3.93765 17.6299 3.88665 17.6299C3.85945 17.6299 3.83055 17.6349 3.79995 17.6449C3.77275 17.6516 3.74725 17.6649 3.72345 17.6849C3.70985 17.6582 3.70135 17.6332 3.69795 17.6099C3.69455 17.5832 3.69285 17.5566 3.69285 17.5299C3.69285 17.4232 3.74215 17.3349 3.84075 17.2649C3.93935 17.1949 4.06515 17.1599 4.21815 17.1599C4.40175 17.1599 4.54285 17.2149 4.64145 17.3249C4.74345 17.4316 4.79445 17.5899 4.79445 17.7999V19.6999H4.76385C4.55985 19.6999 4.40005 19.6532 4.28445 19.5599C4.16885 19.4632 4.11105 19.3099 4.11105 19.0999V17.9399ZM2.94824 17.1599H3.00434C3.18114 17.1599 3.32904 17.2066 3.44805 17.2999C3.57045 17.3932 3.63165 17.5416 3.63165 17.7449V19.6999H3.60105C3.52285 19.6999 3.44465 19.6899 3.36645 19.6699C3.29164 19.6499 3.22194 19.6182 3.15734 19.5749C3.09614 19.5282 3.04514 19.4699 3.00434 19.3999C2.96694 19.3266 2.94824 19.2366 2.94824 19.1299V17.1599Z" fill="white"/>
                            <path d="M1.8049 17.9399C1.8049 17.8999 1.8015 17.8616 1.7947 17.8249C1.7913 17.7882 1.7811 17.7566 1.7641 17.7299C1.7505 17.6999 1.7284 17.6766 1.6978 17.6599C1.6706 17.6399 1.6315 17.6299 1.5805 17.6299C1.5533 17.6299 1.5244 17.6349 1.4938 17.6449C1.4666 17.6516 1.4411 17.6649 1.41729 17.6849C1.40369 17.6582 1.39519 17.6332 1.39179 17.6099C1.38839 17.5832 1.38669 17.5566 1.38669 17.5299C1.38669 17.4232 1.4326 17.3349 1.5244 17.2649C1.6162 17.1949 1.7267 17.1599 1.8559 17.1599C2.0599 17.1599 2.2163 17.2116 2.3251 17.3149C2.4339 17.4149 2.4883 17.5599 2.4883 17.7499V19.6999C2.4101 19.6999 2.3302 19.6916 2.2486 19.6749C2.1704 19.6549 2.0973 19.6232 2.0293 19.5799C1.9647 19.5332 1.9103 19.4732 1.8661 19.3999C1.8253 19.3232 1.8049 19.2266 1.8049 19.1099V17.9399ZM1.32549 18.9199C1.32549 18.9599 1.32719 18.9982 1.33059 19.0349C1.33739 19.0716 1.34759 19.1049 1.36119 19.1349C1.37819 19.1616 1.40029 19.1849 1.4275 19.2049C1.4581 19.2216 1.4989 19.2299 1.5499 19.2299C1.5771 19.2299 1.6043 19.2266 1.6315 19.2199C1.6621 19.2099 1.6893 19.1949 1.7131 19.1749C1.7267 19.2016 1.7352 19.2282 1.7386 19.2549C1.742 19.2782 1.7437 19.3032 1.7437 19.3299C1.7437 19.4366 1.6978 19.5249 1.606 19.5949C1.5142 19.6649 1.40369 19.6999 1.27449 19.6999C1.07049 19.6999 0.914092 19.6466 0.805291 19.5399C0.69649 19.4332 0.64209 19.2999 0.64209 19.1399V17.7499C0.64209 17.6399 0.66249 17.5482 0.70329 17.4749C0.747491 17.3982 0.801891 17.3366 0.866491 17.2899C0.934492 17.2432 1.00759 17.2099 1.08579 17.1899C1.16739 17.1699 1.24729 17.1599 1.32549 17.1599V18.9199Z" fill="white"/>
                        </motion.svg>
                        </GsapMagnetic>
                    </Link>
            </motion.div>
            <motion.div
                variants={headerItem}
                className="fixed right-3"
                onMouseEnter={() => {setIsSubtitleHovered(true)}}
                onMouseLeave={() => {setIsSubtitleHovered(false)}}
            >
                <Menu isActive={isActive} setIsActive={setIsActive} />
                <MenuButton isActive={isActive} setIsActive={setIsActive} />
            </motion.div>
        </motion.header>
    )
}
const Menu = ({isActive, setIsActive}) => {
    const variants= {
        open: {
            width: "fit-content",
            height: "50px",
            opacity: 1,
            top: "-5px",
            right: "-2.5px",
            transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]},
            zIndex: 15,
            display: "block",
            pointerEvents: "auto"
        },
        closed: {
            opacity: 0,
            width: "100px",
            height: "40px",
            top: "-5px",
            zIndex: 0,
            transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]},
            pointerEvents: "none"
        }
    };

    return (
        <motion.div
            className="bg-white w-[100vw] h-[100vh] rounded-lg absolute"
            variants={variants}
            animate={isActive ? "open" : "closed"}
            initial="closed"
        >
            <div className="flex items-center gap-x-[2rem] pl-[2rem] pr-[110px] h-full uppercase text-[1.5rem] font-logo font-semibold">
                <Link onClick={() => setIsActive(false)} href="#experience">Experience</Link>
                <Link onClick={() => setIsActive(false)} href="#projects">Projects</Link>
                <Link onClick={() => setIsActive(false)} href="#about">About</Link>
            </div>
        </motion.div>
    )
}

const MenuButton = ({isActive, setIsActive}) => {

    return(
        <div className="absolute right-2 cursor-pointer w-[80px] h-[40px] overflow-hidden">
            <motion.div
                className="w-full h-full relative"
                animate={{top: isActive ? "-100%" : "0%"}}
                transition={{duration: 0.5, delay: 0.5 , type: "tween", ease: [0.76, 0, 0.24, 1]}}
            >
                <GsapMagnetic>
                <div
                    className="w-full h-full rounded-lg  flex items-center justify-center"
                    onClick={() => setIsActive(true)}
                >
                    <p className="text-white font-logo text-[1.5rem] uppercase m-0">Menu</p>
                </div>
                </GsapMagnetic>
                <div
                    className="w-full h-full bg-[#222222] rounded-lg z-[20] flex items-center justify-center relative"
                    onClick={() => setIsActive(false)}
                >
                    <p className="text-white font-logo text-[1.5rem] uppercase m-0">Close</p>
                </div>
            </motion.div>
        </div>
    )
}