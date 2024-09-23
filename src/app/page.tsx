"use client"
import { useState } from "react"
import Image from "next/image";
import Header from "@/components/Header";
import logoTitle from "../assets/img/logoTitle.svg"
import HeroCard from "@/components/HeroCard";
import data from "../data/data.json"
import Character from "@/components/Character";
import Footer from "@/components/Footer"
import logoFinalSection from "../assets/img/logoTitleFinalSection.svg"
import { motion } from "framer-motion"

export default function Home() {
    const [showModal, setShowModal] = useState(false)

    const handleModal = () => {
        setShowModal(!showModal)
    }

    const translateInMotion = {
        initial: { translateX: "-500px", opacity: 0 },
        animate: { translateX: 0, opacity: 1 },
        exit: { translateX: 0, opacity: 1 },
        transition: { duration: 0.75, ease: "easeInOut" }
    }

    return (
        <>
            <Header
                handleModal={handleModal}
            />
            <main>
                <section className="flex items-center justify-between max-w-[1440px] mx-auto max-[1440px]:px-8 mb-40 mt-52 overflow-hidden">
                    <div>
                        <motion.h1
                            className="font-semibold text-bgBlack text-[115px] leading-none mb-2.5"
                            {...translateInMotion}
                            transition={{ ...translateInMotion.transition, delay: 0.75 }}
                        >
                            Que le plus fort,
                        </motion.h1>
                        <motion.div
                            className="flex items-center gap-x-10 pl-[26px]"
                            {...translateInMotion}
                            transition={{ ...translateInMotion.transition, delay: 1.25 }}
                        >
                            <Image
                                src={logoTitle}
                                alt="Logo"
                                width={103}
                                height={80}
                                className="w-auto h-auto"
                            />
                            <p className="font-semibold text-bgBlack text-[115px] italic leading-none">l'emporte!</p>
                        </motion.div>
                    </div>
                    <HeroCard />
                </section>
                <section className="max-[1440px]:px-8">
                    <h2 className="font-inter font-bold text-[220px] text-bgBlack tracking-[8px] leading-none mb-[100px]">
                        <span className="tracking-normal mr-2.5">{"<A>"}</span>
                        Front les
                    </h2>
                    {data.characters.map(character => (
                        <Character
                            key={character.role}
                            containerClass={character.containerClass}
                            role={character.role}
                            point={character.point}
                            title={character.title}
                            link={character.link}
                            image={character.image}
                            firstContent={character.firstContent}
                            secondContent={character.secondContent}
                            logoClass={character.logoClass}
                            logo={character.logo}
                            logoWidth={character.logoWidth}
                            logoHeight={character.logoHeight}
                        />
                    ))}
                    <article className="bg-bgBlack max-w-[1440px] mx-auto rounded-[60px] pt-[252px] pb-20 px-[102px] flex flex-col items-center justify-center mb-10 sticky top-0 z-10">
                        <div className="mb-[230px] relative">
                            <span className="font-inter font-medium text-xs text-bgWhite opacity-80 mb-[80px] block">/ FINALE02</span>
                            <h2 className="font-inter font-semibold text-[115px] text-bgBeige leading-[123px]">
                                <span className="mr-[100px]">Click</span>
                                <span className="mr-[100px]">Me</span>
                                <span className="mr-[200px]">?</span>
                                Might enter the finals
                            </h2>
                            <Image
                                src={logoFinalSection}
                                alt=""
                                className="absolute bottom-[-10px] left-[80%]"
                            />
                        </div>
                        <div className="relative z-50">
                            <button type="button" className="font-inter font-bold text-bgBlack text-sm bg-bgBeige rounded-[60px] py-5 px-[51px]" onClick={handleModal}>Enter Next Level</button>
                            {data.logoCTA.map(logo => (
                                <Image
                                    key={logo.alt}
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={logo.width}
                                    height={logo.height}
                                    className={logo.class}
                                />
                            ))}
                        </div>
                    </article>
                </section>
                <Footer />
            </main>
            {showModal && (
                <>
                    <div className="bg-bgWhite border border-bgBlack rounded-md fixed top-1/2 left-1/2 z-50 p-10" style={{ transform: "translate(-50%,-50%)" }}>
                        <p className="font-inter font-bold uppercase text-bgBlack text-center">Je n'ai pas eu le temps, je mise tout sur l'Easter Egg</p>
                    </div>
                    <div className="bg-bgBlack/80 w-full h-full fixed top-0 left-0 z-40" onClick={handleModal}></div>
                </>
            )}
        </>
    );
}
