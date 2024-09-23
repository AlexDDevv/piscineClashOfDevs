"use client"
import { useState, useEffect } from "react";
import ScrollBtn from "./ScrollBtn";
import { motion, useScroll, useSpring } from "framer-motion"

export default function Header() {
    const { scrollYProgress } = useScroll();
    const [scrollProgress, setScrollProgress] = useState(0);

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const updateProgress = () => setScrollProgress(Math.floor(scrollYProgress.get() * 100));

        const unsubscribe = scrollYProgress.on("change", updateProgress);

        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <motion.header
            className="w-full fixed top-0 left-0 right-0 pt-5 z-50"
            initial={{ translateY: "-100px", opacity: 0, scale: 0 }}
            animate={{ translateY: 0, opacity: 1, scale: 1 }}
            exit={{ translateY: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
        >
            <div className="flex items-center justify-between max-w-[1440px] w-full max-[1440px]:px-8 mx-auto">
                <div className="bg-bgBlack font-bold text-xs text-purpleLight w-[91px] h-[27px] flex items-center justify-center uppercase rounded-[80px] rotate-6 cursor-pointer">
                    La piscine
                </div>
                <div className="font-bold text-xs text-bgBlack">
                    <span>{scrollProgress}%</span>
                </div>
                <ScrollBtn />
            </div>
            <motion.div
                className="bg-bgBlack h-1 absolute top-0 origin-[0%] w-full"
                style={{ scaleX }}
            />
        </motion.header>
    )
}
