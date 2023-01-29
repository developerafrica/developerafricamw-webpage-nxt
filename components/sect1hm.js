import Image from "next/image"
import styles from "../styles/Sect1hm.module.scss"

export default function sectionone() {
  return (
    <article className={styles.home}>
        <section>
            <div className={styles.image}>
                <Image
                    className={styles.logo}
                    src="/logo.png"
                    alt="developer africa logo"
                    width={350}
                    height={350}
                    priority
                />

            </div>
            <div className={styles.text}>
                <h1>
                    <span>BUILD CODE SOLUTIONS </span><span>FOR YOUR BUSINESS WITH</span><span>THE WORLDS TOP TALENT</span>
                </h1>
            </div>
            <div className={styles.link}>
                <a
                    href="/hiretalent"
                    className={styles.hirelink}
                    rel="noopener noreferrer"
                >
                    HIRE TALENT &rarr;
                </a>
            </div>
        </section>
    </article>
  )
}
