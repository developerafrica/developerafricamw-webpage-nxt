import styles from "../styles/sect7edu.module.scss"
import Image from  "next/image"
export default function sectionseven() {
  return (
    <article className={styles.edu}>
        <div className={styles.artedu}>
            <header>
                <h1>INTERESTED IN PROGRAMMING ?</h1>
                <p>
                    <span>learn to build anything with</span><span><strong>DEVELOPER AFRICA</strong>learning community</span>
                </p>
            </header>
            <main>
                <div className={styles.logos}>
                    <Image 
                        src="/twitter.svg"
                        alt="programming logo"
                        className="proglogo"
                        width={60}
                        height={60}
                    />
                </div>
                <div className={styles.text}>
                    <span>START A CAREER IN SOFTWARE ENGENEERING </span><span>AND COMPUTER DEVELOPMENT</span>
                </div>
                <div className={styles.image}>
                        <Image 
                            src="/edu.png"
                            alt="people "
                            className="eduimage"
                            width={200}
                            height={200}
                        />
                    
                </div>
            </main>
            <footer>
                <a href="/edu">START LEARNING &rarr;</a>
                <a href="/edu#curriculum">VIEW OUR CURRICULUM &rarr;</a>
            </footer>
        </div>        
    </article>
  )
}
