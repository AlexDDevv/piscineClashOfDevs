import Image from "next/image"

interface CharacterLinkProps {
    href: string,
    linkBg: string,
    linkColor: string,
    linkBorder: string,
    linkContent: string,
    cursor: string
}

export default function CharacterLink({ href, linkBg, linkColor, linkBorder, linkContent, cursor }: CharacterLinkProps) {
    return (
        <div className="relative">
            <a href={href} className={`bg-${linkBg} font-inter font-semibold text-xs text-${linkColor} px-3 py-1.5 rounded-[2px_19px_19px_25px] shadow-[inset_0_0_0_2px_rgba(var(${linkBorder}))]`} target="blank">{linkContent}</a>
            <Image
                src={cursor}
                alt="Curseur"
                width={12}
                height={13}
                className="absolute bottom-[25px] left-[-10px] h-auto w-auto"
            />
        </div>
    )
}
