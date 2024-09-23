import Image from "next/image";
import CharacterLink from "./CharacterLink";
import { motion } from "framer-motion"

interface ContentFragment {
    before?: string;
    bolder: string;
    after?: string;
}

interface CharacterProps {
    containerClass: string;
    role: string;
    point: string;
    title: string;
    link: {
        href: string;
        linkClass: string;
        linkContent: string;
        cursor: string;
    }[];
    image: string;
    firstContent: ContentFragment;
    secondContent: ContentFragment;
    logoClass: string;
    logo: string;
    logoWidth: number;
    logoHeight: number;
}

export default function Character({
    containerClass, role, point, title, link, image, firstContent, secondContent, logoClass, logo, logoWidth, logoHeight,
}: CharacterProps) {
    const fadeInMotion = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 0.5, ease: "easeInOut" }
    }

    return (
        <motion.article
            className={`${containerClass} sticky top-0 z-10`}
            {...fadeInMotion}
        >
            <div className="flex justify-between pl-12 mb-14">
                <div className="flex gap-x-[150px]">
                    <div>
                        <p className="font-inter font-medium text-xs uppercase mb-1">
                            {role}
                        </p>
                        <span className="font-inter font-medium text-xs">{point}</span>
                    </div>
                    <h3 className="font-inter font-bold text-xs uppercase">{title}</h3>
                </div>
                <div className="flex gap-x-8">
                    {link.map((item) => (
                        <CharacterLink
                            key={item.linkContent}
                            href={item.href}
                            linkClass={item.linkClass}
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
                <div className="pt-7 max-w-[241px]">
                    <p className="font-inter font-medium text-xs leading-5 mb-8">
                        {firstContent.before}
                        <strong>{firstContent.bolder}</strong>
                        {firstContent.after}
                    </p>
                    <p className="font-inter font-medium text-xs leading-5">
                        {secondContent.before}
                        <strong>{secondContent.bolder}</strong>
                        {secondContent.after}
                    </p>
                </div>
            </div>
            <div className="h-[412px] w-[412px] flex items-center justify-center absolute bottom-[-100px] right-[-85px]">
                <div className={logoClass}>
                    <Image
                        src={logo}
                        alt=""
                        width={logoWidth}
                        height={logoHeight}
                        className="h-auto w-auto"
                    />
                </div>
            </div>
        </motion.article>
    );
}
