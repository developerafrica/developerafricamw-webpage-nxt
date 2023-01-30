import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

//custom imports
import SectionOneHm from "/components/sect1hm.js"
import SectionTwoAbt from "/components/Sect2abt.js"
import SectionThreeCard from "/components/Sect3card.js"
import SectionFourBanner from "/components/sect4banner.js"
import SectionFiveContact from "/components/sect5cntct.js"
import SectionSevenEdu  from "/components/sect7edu.js"
import Footer  from "/components/footer.js"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>DEVELOPER AFRICA MW</title>
        <meta name="theme-color" content="#d9ddde" />
        <meta name="description" content="developer africa mw  | build code solutions for your business challenges" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            DEVELOPER AFRICA MW 
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <h3>all code solutions african</h3>
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <SectionOneHm />
          <SectionTwoAbt />        
        </div>
        
        <div className={styles.heading}>
          <h1>PROJECTS</h1>
        </div>
        <div className={styles.grid}>
          <SectionThreeCard
            name={"tiwelenge"}
            description={"mobile ride hailing app charging and swaping services"}
            link={"https://"}
            github={"https://"}
            image={"/pro.png"}
            className={styles.card}
           />
          <SectionThreeCard
            name={"tiwelenge"}
            description={"mobile ride hailing app charging and swaping services"}
            link={"https://"}
            github={"https://"}
            image={"/pro1.png"}
            className={styles.card}
           />
          <SectionThreeCard
            name={"tiwelenge"}
            description={"mobile ride hailing app charging and swaping services"}
            link={"https://"}
            github={"https://"}
            image={"/pro6.png"}
            className={styles.card}
           />
          <SectionThreeCard
            name={"tiwelenge"}
            description={"mobile ride hailing app charging and swaping services"}
            link={"https://"}
            github={"https://"}
            image={"/pro5.png"}
            className={styles.card}
           />
          <SectionThreeCard
            name={"agri invoice"}
            description={"mobile ride hailing app charging and swaping services"}
            link={"https://"}
            github={"https://"}
            image={"/pro2.png"}
            className={styles.card}
           />
          <SectionThreeCard
            name={"budget app"}
            description={"mobile ride hailing app charging and swaping services"}
            link={"https://"}
            github={"https://"}
            image={"/pro3.png"}
            className={styles.card}
           />
          <SectionThreeCard
            name={"plantdisease platform"}
            description={"mobile ride hailing app charging and swaping services"}
            link={"https://"}
            github={"https://"}
            image={"/pro4.png"}
            className={styles.card}
           />
        </div>
        <div className={styles.viewalllink}>
          <a href="/projects">VIEW ALL PROJECTS &rarr;</a>
        </div>
        <div className={styles.sections}>
          <SectionFourBanner />
          <div className={styles.heading}>
            <h1>WHAT WE DO</h1>
          </div>
          <SectionFiveContact />
          <SectionSevenEdu />
          <Footer />
         
        </div>
      </main>
    </>
  )
}
