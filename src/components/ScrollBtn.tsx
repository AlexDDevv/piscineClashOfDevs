import { useState, useEffect } from "react";
import Image from "next/image";
import logoTheme from "../assets/img/logoTheme.svg"
import { motion } from "framer-motion"

export default function ScrollBtn() {
    const [isBottom, setIsBottom] = useState(false);

    const checkScrollPosition = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const isAtBottom = scrollPosition >= document.body.offsetHeight;
        setIsBottom(isAtBottom);
    };

    const handleClick = () => {
        if (isBottom) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollPosition);
        return () => {
            window.removeEventListener('scroll', checkScrollPosition);
        };
    }, []);

    return (
        <div className="bg-bgBlack rounded-[63px] w-[54px] h-[27px] relative cursor-pointer" onClick={handleClick}>
            <motion.div
                className={`bg-bgBeige rounded-full w-[23px] h-[23px] flex items-center justify-center absolute top-1/2 ${!isBottom ? "left-1/2" : "right-1/2"}`}
                style={{ transform: "translate(-0%,-50%" }}
            >
                <Image
                    src={logoTheme}
                    alt="Logo pour changer le thème du site"
                    className="w-[15px] h-[15px]"
                />
            </motion.div>
        </div>
    )
}
