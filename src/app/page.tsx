import Header from "@/components/Header";
import Image from "next/image";
import logoTitle from "../assets/img/logoTitle.svg"
import HeroCard from "@/components/HeroCard";


export default function Home() {
    return (
        <>
            <Header />
            <section className="flex items-center justify-between max-w-[1440px] mx-auto max-[1440px]:px-8 mb-40">
                <div>
                    <h1 className="font-semibold text-bgBlack text-[115px] leading-none mb-2.5">Que le plus fort,</h1>
                    <div className="flex items-center gap-x-10 pl-[26px]">
                        <Image
                            src={logoTitle}
                            alt="Logo"
                            className="w-[103px] h-[80px]"
                        />
                        <p className="font-semibold text-bgBlack text-[115px] italic leading-none">l'emporte!</p>
                    </div>
                </div>
                <HeroCard />
            </section>
        </>
    );
}
