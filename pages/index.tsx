import Meta from "@components/Meta"
import Browser from "@components/Browser"
import Carousel from "@components/Carousel"
import HeroSection from "@components/HeroSection"
import QuoteBox from "@components/QuoteBox"
import Section from "@components/Section"
import Swiper from "@components/Swiper"
import { FunctionComponent } from "react"
import { GetStaticProps } from "next"
import { Project, Quote, Skill } from "types"
import FeaturedProject from "@components/FeaturedProject"
import styles from "@styles/Home.module.css"
import { getSkills } from "services/skills"
import Skills from "@components/Skills"
import { getHomepage } from "services/pages"
import BlockContent from "@sanity/block-content-to-react"
import sanityClient from "@sanityClient"

export type HomeProps = {
    heroText: any,
    featuredProjects?: Project[],
    skillsText: any,
    skills?: Skill[],
    testimonials: Quote[]
}

const Home: FunctionComponent<HomeProps> = ({ heroText, featuredProjects, skillsText, skills = [], testimonials }) => <>
    <Meta title="Home" />
    <HeroSection className={styles.hero}>
        <Section className={styles.heroContent}>
            <BlockContent
                className={styles.heroText}
                blocks={heroText}
                {...sanityClient.config()} />
            {featuredProjects && <div className={styles.heroProjects}>
                <Swiper shakeFirst zDistance={150} className={styles.swiper}>
                    {featuredProjects.map((p, i) =>
                        <Browser key={i} className={styles.browser}>
                            <FeaturedProject {...p}/>
                        </Browser>
                    )}
                </Swiper>
                <img className={styles.label} src="ft-projects.png" alt="" draggable={false}/>
            </div>}
        </Section>
    </HeroSection>
    <Section className={styles.skilsSection}>
        <h1>Skills</h1>
        <div className={styles.skillsText}>
            <BlockContent
                blocks={skillsText}
                {...sanityClient.config()} />
        </div>
        <Skills skills={skills} />
    </Section>
    <Carousel style={{ marginBottom: "5rem" }}>
        {testimonials.map((q, i) => <QuoteBox key={i} {...q} />)}
    </Carousel>
</>

// Load props from config file
export const getStaticProps: GetStaticProps<HomeProps> = async _ => {
    const homeProps = await getHomepage()
    const skills = await getSkills()

    return {
        props: {
            ...homeProps,
            skills
        }
    }
}

export default Home