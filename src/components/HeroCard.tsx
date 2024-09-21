"use client"
import React, { useState } from 'react'
import Image from "next/image";
import card from "../assets/img/card.svg"
import HeroLink from './HeroLink';
import reverseCard from "../assets/img/reverseCard.svg"
import easterEgg from "../assets/img/easterEgg.gif"
import { motion } from "framer-motion"

export default function HeroCard() {
    const [showEasterEgg, setShowEasterEgg] = useState(false)

    const handleEasterEgg = () => {
        setShowEasterEgg(!showEasterEgg)
    }
    return (
        <>
            {!showEasterEgg ? (
                <motion.div
                    className="relative"
                    initial={{ translateX: "500px", opacity: 0 }}
                    animate={{ translateX: 0, opacity: 1 }}
                    exit={{ translateX: 0, opacity: 1 }}
                    transition={{ duration: 0.75, ease: "easeInOut", delay: 1.5 }}
                >
                    <div>
                        <Image
                            src={card}
                            alt="Carte"
                        />
                        <svg
                            version="1.0"
                            width="89.333"
                            height="89.333"
                            viewBox="0 0 67 67"
                            className="w-[28px] h-[28px] absolute top-2.5 left-[88px] rotate-[13.95deg] cursor-pointer svgHover"
                            onClick={handleEasterEgg}
                        >
                            <g fill="#F3F3F1">
                                <path d="M32.2 2.2c-.7.7-1.2 1.9-1.2 2.9 0 1.2-1.3 1.8-5.1 2.2-2.8.4-5.9.2-6.9-.3-1.4-.8-1.9-.5-2.4 1.4-.7 2.9-3.1 4-5.7 2.6-1-.6-1.9-.9-1.9-.6 0 1.1 2.6 6.2 3.7 7.4 2 2.1 1.5 3.2-1.5 3.2-6.3 0-9.7 6.9-5.3 10.7 1.4 1.2 1.8 2.4 1.4 4.4-.4 2.4-.1 2.9 2 3.5 1.5.3 2.9 1.5 3.2 2.5.4 1 2.1 3 3.9 4.4 2.3 1.8 3.6 3.8 4.5 7.6 4.4 17.2 21.5 16.8 26-.6.6-2.4 2.5-5.5 4.6-7.5 1.9-1.9 3.5-4 3.5-4.7 0-.7.8-1.3 1.9-1.3 2.6 0 4.5-2.5 3.3-4.6-.7-1.2-.3-2.2 1.5-4 1.2-1.3 2.3-3.2 2.3-4.2 0-2.7-4.2-6.2-7.3-6.2-3.2 0-3.3-.9-.7-5.2 2.4-4 2.7-6.7.6-4.9-2 1.7-5.6-.3-5.6-2.9 0-2.3-.4-2.4-3-1-2.4 1.3-11 .1-11-1.5 0-.6-.8-1.9-1.8-2.8-1.4-1.3-2.1-1.4-3-.5zM30.5 9c.3.5-.4 1-1.6 1-1.9 0-2.1.4-1.4 3.7.9 4.8 1.3 5.2 3.1 2.9.8-1.1 1.4-1.5 1.4-1 0 1.7-2.3 3.4-4.4 3.4-1.7 0-2.1-.6-2.1-3.7s-.4-3.8-2.5-4.4c-2.6-.6-1.9-1.3 2.5-2.2 3.5-.8 4.4-.7 5 .3zm14.9.8c.2.4-.7 1.2-2 1.9-1.3.6-2.4.7-2.4.2 0-.5-1-1.4-2.2-1.9-1.9-.7-1.6-.9 1.9-.9 2.3-.1 4.4.2 4.7.7zM42 18c.5 0 1.4-.8 2-1.8.7-1 1-1.1.7-.3-.9 3.7-8.7 4-8.7.4 0-1.5.2-1.4 1.4.2 1.3 1.8 1.4 1.8 2.2-.6.8-2.4.8-2.4 1.2-.2.2 1.3.7 2.3 1.2 2.3zm-23 1.1c0 .6-.4.7-1 .4-.5-.3-1-1.1-1-1.6 0-.6.5-.7 1-.4.6.3 1 1.1 1 1.6zm31-.6c0 .8-.4 1.5-1 1.5-.5 0-.7-.7-.4-1.5.4-.8.8-1.5 1-1.5.2 0 .4.7.4 1.5zM28.4 38.2c1.4 4-.3 8.2-3.4 8.6-4.5.7-6.8-6.2-3.3-10 2.3-2.6 5.6-1.9 6.7 1.4zm18 0c1.4 4-.3 8.2-3.4 8.6-4.2.6-6.5-5.1-3.9-9.9 1.6-3 6.1-2.2 7.3 1.3zm-9 10c2.5 4.1-3.8 7.6-7.5 4.2-2.3-2.1-2.4-2.8-.3-4.9 2-2 6.3-1.6 7.8.7zm-10.2 6.3c1.9 1.6 4.2 2.5 6.3 2.5 2.1 0 4.4-.9 6.3-2.5 1.7-1.4 3.3-2.5 3.6-2.5 1.7 0 .2 4.4-2.5 7.5-2.5 2.8-3.8 3.5-6.8 3.5-4.3 0-7.5-2-9.6-6-2.8-5.4-1.9-6.3 2.7-2.5z" />
                                <path d="M22.7 40.6c-1 1.1.3 2.4 2.4 2.4 1 0 1.9-.7 1.9-1.5 0-1.5-3.1-2.1-4.3-.9zM40 41.5c0 1.1.7 1.5 2.3 1.3 1.2-.2 2.2-.8 2.2-1.3 0-.6-1-1.1-2.2-1.3-1.6-.2-2.3.2-2.3 1.3zM30.5 49c-.4.7-.1 1.9.8 2.7 1.9 1.9 5.9.8 5.5-1.5-.4-2-5.3-2.9-6.3-1.2z" />
                            </g>
                        </svg>
                    </div>
                    <HeroLink
                        showEasterEgg={showEasterEgg}
                    />
                </motion.div>
            ) : (
                <motion.div
                    className="relative"
                    initial={{ translateX: "500px", opacity: 0 }}
                    animate={{ translateX: 0, opacity: 1 }}
                    exit={{ translateX: 0, opacity: 1 }}
                    transition={{ duration: 0.75, ease: "easeInOut", delay: 1.5 }}
                >
                    <div>
                        <Image
                            src={reverseCard}
                            alt="Easter egg"
                            className=""
                        />
                        <Image
                            src={easterEgg}
                            alt="Easter egg content"
                            className="rounded-md posGif cursor-pointer"
                            onClick={handleEasterEgg}
                        />
                    </div>
                    <HeroLink
                        showEasterEgg={showEasterEgg}
                    />
                </motion.div>
            )}
        </>
    )
}
