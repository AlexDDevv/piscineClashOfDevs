import Image from "next/image"
import Link from "next/link"

interface CharacterLinkProps {
    href: string,
    linkClass: string,
    linkContent: string,
    cursor: string
}

export default function CharacterLink({ href, linkClass, linkContent, cursor }: CharacterLinkProps) {
    return (
        <div className="relative">
            <Link href={href} className={linkClass} target="blank">{linkContent}</Link>
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
