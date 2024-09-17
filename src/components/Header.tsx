import Image from "next/image";
import logoTheme from "../assets/img/logoTheme.svg"

export default function Header() {
    return (
        <header className="flex items-center justify-between max-[1440px]:px-8 pt-5 max-w-[1440px] mx-auto mb-36">
            <div className="bg-bgBlack font-bold text-xs text-purpleLight w-[91px] h-[27px] flex items-center justify-center uppercase rounded-[80px] rotate-6">
                La piscine
            </div>
            <div className="font-bold text-xs text-bgBlack">
                0%
            </div>
            <div className="bg-bgBlack rounded-[63px] w-[54px] h-[27px] relative cursor-pointer">
                <div className="bg-bgBeige rounded-full w-[23px] h-[23px] flex items-center justify-center switchTheme">
                    <Image
                        src={logoTheme}
                        alt="Logo pour changer le thème du site"
                        className="w-[15px] h-[15px]"
                    />
                </div>
            </div>
        </header>
    )
}
