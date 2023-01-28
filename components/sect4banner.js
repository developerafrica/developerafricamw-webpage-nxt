import styles from "../styles/sect4banner.module.scss"

export default function sectionfour() {
  return (
    <article className={styles.banner}>
        <div className={styles.artbn}>
            <p>
                <span>from concepts of your business challenges</span><span>to real code solutions</span>
            </p>
            <a href="/approach">OUR APPROACH &rarr;</a>

        </div>
    </article>
  )
}
