import Image from "next/image";
import Header from "@/components/Header";
import logoTitle from "../assets/img/logoTitle.svg"
import HeroCard from "@/components/HeroCard";
import data from "../data/data.json"
import Character from "@/components/Character";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <section className="flex items-center justify-between max-w-[1440px] mx-auto max-[1440px]:px-8 mb-40">
                    <div>
                        <h1 className="font-semibold text-bgBlack text-[115px] leading-none mb-2.5">Que le plus fort,</h1>
                        <div className="flex items-center gap-x-10 pl-[26px]">
                            <Image
                                src={logoTitle}
                                alt="Logo"
                                width={103}
                                height={80}
                                className="w-auto h-auto"
                            />
                            <p className="font-semibold text-bgBlack text-[115px] italic leading-none">l'emporte!</p>
                        </div>
                    </div>
                    <HeroCard />
                </section>
                <section>
                    <h2 className="font-inter font-bold text-[220px] text-bgBlack tracking-[8px] leading-none mb-[100px]">
                        <span className="tracking-normal mr-2.5">&lt;A&gt;</span>
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
                </section>
            </main>
        </>
    );
}
