import Image from "next/image";
import logoTheme from "../assets/img/logoTheme.svg"

export default function ScrollBtn({ handleModal }: { handleModal: () => void }) {
    return (
        <div className="bg-bgBlack rounded-[63px] w-[54px] h-[27px] relative cursor-pointer" onClick={handleModal}>
            <div className="bg-bgBeige rounded-full w-[23px] h-[23px] flex items-center justify-center absolute top-1/2 left-1/2" style={{ transform: "translate(-0%,-50%)" }}>
                <Image
                    src={logoTheme}
                    alt="Logo pour changer le thème du site"
                    className="w-[15px] h-[15px]"
                />
            </div>
        </div>
    )
}
