import styles from "../styles/sect5cntct.module.scss"
import Bussinesscard from "./bussinesscard"

export default function sectionfive() {
  return (
    <article className={styles.contact}>
        <div className={styles.cnt}>
            <header>
                <h1>HAVE SOMETHING IN MIND ?</h1>
                <a href="/contact">CONTACT &rarr;   </a>
            </header>
            <main>
                <Bussinesscard/>
            </main>
            <footer>
                <a href="/bussinesscard.png" download="DEVELOPERAFRICAMW | business card 2023">
                    <div>
                        <span>DOWNLOAD OUR BUSINESS CARD</span>
                        <span>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.875 10V10.625C11.875 11.3925 11.3925 11.875 10.625 11.875H4.375C3.60746 11.875 3.125 11.3925 3.125 10.625V10C3.125 9.66009 2.83991 9.375 2.5 9.375C2.16009 9.375 1.875 9.66009 1.875 10V10.625C1.875 12.0066 2.99342 13.125 4.375 13.125H10.625C12.0066 13.125 13.125 12.0066 13.125 10.625V10C13.125 9.66009 12.8399 9.375 12.5 9.375C12.1601 9.375 11.875 9.66009 11.875 10ZM4.5614 7.9386L7.0614 10.4386C7.17105 10.5592 7.32456 10.625 7.5 10.625C7.83991 10.625 8.125 10.3399 8.125 10C8.125 9.82456 8.05921 9.67105 7.9386 9.5614L5.4386 7.0614C5.32895 6.94079 5.17544 6.875 5 6.875C4.66009 6.875 4.375 7.16009 4.375 7.5C4.375 7.67544 4.44079 7.82895 4.5614 7.9386ZM7.9386 10.4386L10.4386 7.9386C10.5592 7.82895 10.625 7.67544 10.625 7.5C10.625 7.16009 10.3399 6.875 10 6.875C9.82456 6.875 9.67105 6.94079 9.5614 7.0614L7.0614 9.5614C6.94079 9.67105 6.875 9.82456 6.875 10C6.875 10.3399 7.16009 10.625 7.5 10.625C7.67544 10.625 7.82895 10.5592 7.9386 10.4386ZM8.125 10V2.5C8.125 2.16009 7.83991 1.875 7.5 1.875C7.16009 1.875 6.875 2.16009 6.875 2.5V10C6.875 10.3399 7.16009 10.625 7.5 10.625C7.83991 10.625 8.125 10.3399 8.125 10Z" fill="#000"/>
                            </svg>
                        </span>    

                    </div>
                    
                </a>
            </footer>
        </div>
    </article>
  )
}
