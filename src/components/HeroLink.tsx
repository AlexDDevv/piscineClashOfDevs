import Image from "next/image";
import data from "../data/data.json"
import { motion } from "framer-motion"

export default function HeroLink({ showEasterEgg }: { showEasterEgg: boolean }) {
    return (
        <>
            {!showEasterEgg ? (
                data.heroLinks.map((link, index) => (
                    <motion.div
                        key={link.content}
                        className={link.classDiv}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut", delay: (index * 0.2) + 2 }}
                    >
                        <a href={link.href} className={link.classLink} target="blank">{link.content}</a>
                        <Image
                            src={link.cursor}
                            alt="Curseur"
                            width={12}
                            height={13}
                            className={link.classCursor}
                        />
                    </motion.div>
                ))
            ) : (
                data.easterEggLink.map(link => (
                    <motion.div
                        key={link.content}
                        className={link.classDiv}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut", delay: 2 }}
                    >
                        <a href={link.href} className={link.classLink} target="blank">{link.content}</a>
                        <Image
                            src={link.cursor}
                            alt="Curseur"
                            width={12}
                            height={13}
                            className={link.classCursor}
                        />
                    </motion.div>
                ))
            )}
        </>
    )
}
