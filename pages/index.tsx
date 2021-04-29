import Meta from "@components/Meta"
import Browser from "@components/Browser"
import Carousel from "@components/Carousel"
import HeroSection from "@components/HeroSection"
import QuoteBox, { Quote } from "@components/QuoteBox"
import Section from "@components/Section"
import Skills, { Skill } from "@components/Skills"
import Swiper from "@components/Swiper"
import styles from "@styles/Home.module.css"
import { FunctionComponent } from "react"
import { GetStaticProps } from "next"
import config from "config"

export type HomeProps = {
    heroText: string,
    skills: {
        text: string,
        skills: Skill[]
    },
    testimonials: Quote[]
}

const Home: FunctionComponent<HomeProps> = ({ heroText, skills, testimonials }) => <>
    <Meta title="Home" />
    <HeroSection className={styles.hero}>
        <Section className={styles.heroContent}>
            <div className={styles.heroText} dangerouslySetInnerHTML={{ __html: heroText }}/>
            <div className={styles.heroProjects}>
                <Swiper shakeFirst zDistance={150} className={styles.swiper}>
                    <Browser className={styles.browser}>1</Browser>
                    <Browser className={styles.browser}>2</Browser>
                    <Browser className={styles.browser}>3</Browser>
                </Swiper>
                <img className={styles.label} src="ft-projects.png" draggable={false}/>
            </div>
        </Section>
    </HeroSection>
    <Section className={styles.skilsSection}>
        <Skills skills={skills.skills} className={styles.skillsBox} />
        <div className={styles.skillsContent}>
            <h1>Skills</h1>
            <p>{skills.text}</p>
        </div>
    </Section>
    <Carousel style={{ marginBottom: "5rem" }}>
        {testimonials.map((q, i) => <QuoteBox key={i} {...q} />)}
    </Carousel>
</>

// Load props from config file
export const getStaticProps: GetStaticProps<HomeProps> = async _ => ({ props: config.home })

export default Home