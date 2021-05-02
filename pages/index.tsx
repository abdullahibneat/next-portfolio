import Meta from "@components/Meta"
import Browser from "@components/Browser"
import Carousel from "@components/Carousel"
import HeroSection from "@components/HeroSection"
import QuoteBox, { Quote } from "@components/QuoteBox"
import Section from "@components/Section"
import Skills, { Skill } from "@components/Skills"
import Swiper from "@components/Swiper"
import { FunctionComponent } from "react"
import { GetStaticProps } from "next"
import config from "config"
import { Project } from "types"
import sanityClient from "@sanityClient"
import FeaturedProject from "@components/FeaturedProject"
import styles from "@styles/Home.module.css"

export type HomeProps = {
    heroText: string,
    featuredProjects?: Project[],
    skills: {
        text: string,
        skills: Skill[]
    },
    testimonials: Quote[]
}

const Home: FunctionComponent<HomeProps> = ({ heroText, featuredProjects, skills, testimonials }) => <>
    <Meta title="Home" />
    <HeroSection className={styles.hero}>
        <Section className={styles.heroContent}>
            <div className={styles.heroText} dangerouslySetInnerHTML={{ __html: heroText }}/>
            {featuredProjects && <div className={styles.heroProjects}>
                <Swiper shakeFirst zDistance={150} className={styles.swiper}>
                    {featuredProjects.map((p, i) =>
                        <Browser key={i} className={styles.browser}>
                            <FeaturedProject {...p}/>
                        </Browser>
                    )}
                </Swiper>
                <img className={styles.label} src="ft-projects.png" draggable={false}/>
            </div>}
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
export const getStaticProps: GetStaticProps<HomeProps> = async _ => {
    const featuredProjects = await sanityClient.fetch(`
        *[_type == "project" && featured] | order(_createdAt desc) {
            title,
            "slug": slug.current,
            "featuredImage": featuredImage.asset->url + "?w=300&h=150&fit=max",
            github,
            live,
            summary,
            "categories": categories[]->name
        }
    `)
    return {
        props: {
            ...config.home,
            featuredProjects
        }
    }
}

export default Home