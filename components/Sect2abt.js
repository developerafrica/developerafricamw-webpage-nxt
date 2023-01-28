import Image from "next/image"
import styles from "../styles/Sect2abt.module.scss"
export default function sectiontwo() {
  return (
    <article className={styles.abtcard}>
        <header>
            <div className={styles.abtcdimgs}>
                
                <span>
                    <Image
                            className={styles.logo}
                            src="/brand2.png"
                            alt="brand logo"
                            width={350}
                            height={350}
                            priority
                    />
                </span>

                <span>
                    <Image
                            className={styles.logo}
                            src="/brand1.png"
                            alt="brand logo"
                            width={350}
                            height={350}
                            priority
                    />                
                </span>
                <span>
                    <Image
                            className={styles.logo}
                            src="/brand3.png"
                            alt="brand logo"
                            width={350}
                            height={350}
                            priority
                    />
                </span>
            </div>
        </header>
        <main>
            <div className={styles.mn}>
                <h1>
                    <span>TRUSTED BY STRONG GLOBAL</span><span>STARTUPS</span>
                </h1>
                <p>
                    <strong>developer africa</strong> is a trusetd by industry leading organisations . Our teams are highly passionate and sucessful in UI / UX design, with experience in visual UI design, usability interaction. To provide you with a wide range of unique skill sets for your business 
                </p>
            </div>
        </main>
        <footer>
            <div className={styles.abtlink}>
                <a href="/about">ABOUT DEVELOPER AFRICA &rarr;</a>
            </div>
        </footer>
    </article>
  )
}
