import Image from "next/image";
import data from "../data/data.json"

export default function HeroLink({ showEasterEgg }: { showEasterEgg: boolean }) {
    return (
        <>
            {!showEasterEgg ? (
                data.heroLinks.map(link => (
                    <div key={link.content} className={link.classDiv}>
                        <a href={link.href} className={link.classLink} target="blank">{link.content}</a>
                        <Image
                            src={link.cursor}
                            alt="Curseur"
                            width={12}
                            height={13}
                            className={link.classCursor}
                        />
                    </div>
                ))
            ) : (
                data.easterEggLink.map(link => (
                    <div key={link.content} className={link.classDiv}>
                        <a href={link.href} className={link.classLink} target="blank">{link.content}</a>
                        <Image
                            src={link.cursor}
                            alt="Curseur"
                            width={12}
                            height={13}
                            className={link.classCursor}
                        />
                    </div>
                ))
            )}
        </>
    )
}
