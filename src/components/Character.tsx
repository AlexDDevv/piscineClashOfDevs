import Image from "next/image";
import CharacterLink from "./CharacterLink";

interface CharacterProps {
    containerBg: string,
    role: string,
    point: string,
    title: string,
    link: {
        href: string,
        linkBg: string,
        linkColor: string,
        linkBorder: string,
        linkContent: string,
        cursor: string
    }[],
    image: string,
    firstContent: string,
    secondContent: string,
    logoBg: string,
    logo: string,
    logoWidth: number,
    logoHeight: number
}

export default function Character({ containerBg, role, point, title, link, image, firstContent, secondContent, logoBg, logo, logoWidth, logoHeight }: CharacterProps) {
    return (
        <article className={`bg-${containerBg} max-w-[1440px] mx-auto rounded-[60px] p-12 pt-16 relative overflow-hidden`}>
            <div className="flex justify-between pl-12 mb-14">
                <div className="flex gap-x-[150px]">
                    <div>
                        <p className="font-inter font-medium text-xs uppercase mb-1">{role}</p>
                        <span className="font-inter font-medium text-xs">{point}</span>
                    </div>
                    <h3 className="font-inter font-bold text-xs uppercase">{title}</h3>
                </div>
                <div className="flex gap-x-8">
                    {link.map(item => (
                        <CharacterLink
                            key={item.linkContent}
                            href={item.href}
                            linkBg={item.linkBg}
                            linkColor={item.linkColor}
                            linkBorder={item.linkBorder}
                            linkContent={item.linkContent}
                            cursor={item.cursor}
                        />
                    ))}
                </div>
            </div>
            <div className="flex gap-x-6">
                <div>
                    <Image
                        src={image}
                        alt={title}
                        width={987}
                        height={696}
                        className="rounded-[40px]"
                    />
                </div>
                <div className="pt-7 max-w-60">
                    <p className="font-inter font-medium text-xs leading-5 mb-8">{firstContent}</p>
                    <p className="font-inter font-medium text-xs leading-5">{secondContent}</p>
                </div>
            </div>
            <div className="h-[412px] w-[412px] flex items-center justify-center absolute bottom-[-100px] right-[-85px]">
                <div className={`h-[310px] w-[310px] rounded-full bg-${logoBg} flex items-center justify-center`}>
                    <Image
                        src={logo}
                        alt=""
                        width={logoWidth}
                        height={logoHeight}
                        className="h-auto w-auto"
                    />
                </div>
            </div>
        </article>
    )
}
