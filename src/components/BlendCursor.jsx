'use client';
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BlendCursor({isTitleHovered, isSubtitleHovered}) {
    const size = isTitleHovered ? 300 : isSubtitleHovered ? 200 : 40;
    const colors = [
        
        "#c32d27",
        
        "#356fdb",

        "#f5c63f",
    
    ]

    const circles = useRef([]);
    const mouse = useRef({
        x: 0,
        y: 0
    });
    const delayedMouse = useRef({
        x: 0,
        y: 0
    });

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
        mouse.current = {
            x: clientX,
            y: clientY
        }
    };

    const lerp = (x, y, a) => x * (1 - a) + y * a;

    const moveCircle = (x, y) => {
        circles.current.forEach((circle, i) => {
            gsap.set(circle, {x, y, xPercent: -50, yPercent: -50});
        })
    }

    const animate = () => {
        const { x, y } = delayedMouse.current;

        delayedMouse.current = {
            x: lerp(x, mouse.current.x, 0.075),
            y: lerp(y, mouse.current.y, 0.075)
        }
        moveCircle(delayedMouse.current.x, delayedMouse.current.y);
        window.requestAnimationFrame(animate);
    }

    useEffect(() => {
        animate();
        window.addEventListener("mousemove", manageMouseMove);
        return () => window.removeEventListener("mousemove", manageMouseMove);
    });

    return (
        <>
        {
            colors.map( (color, i, array) => {
                return <div
                    ref={ref => circles.current[i] = ref}
                    key={color}
                    className='fixed z-10 top-0 left-0 rounded-full mix-blend-difference pointer-events-none'
                    style={{
                        backgroundColor: color,
                        width: size,
                        height: size,
                        filter: `blur(${isTitleHovered ? 15 : isSubtitleHovered ? 10 : 2 }px)`,
                        transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out,
                        transform ${(array.length - i) * 0.1}s ease-out`
                    }}
                />
            })
        }
        </>
    )
}