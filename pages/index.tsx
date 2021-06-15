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
import Skills from "@components/Skills"
import { getHomepage } from "services/pages"
import BlockContent from "@sanity/block-content-to-react"
import sanityClient from "@sanityClient"
import ProjectCard from "@components/ProjectCard"
import Link from "next/link"
import { transformText } from "utils"

export type HomeProps = {
    heroSmallText?: string,
    heroText: any,
    github?: string,
    featuredProjects?: Project[],
    skillsText: any,
    skills?: Skill[],
    latestProject?: Project,
    testimonials: Quote[]
}

const Home: FunctionComponent<HomeProps> = ({ heroSmallText, heroText, github, featuredProjects, skillsText, skills = [], latestProject, testimonials }) => <>
    <Meta title="Home" />
    <HeroSection className={styles.hero}>
        <Section className={styles.heroContent}>
            <div className={styles.heroTextContainer}>
                {heroSmallText && <div>{heroSmallText}</div>}
                <div className={styles.heroText}>
                    <BlockContent
                        blocks={heroText.map(t => transformText(t))}
                        {...sanityClient.config()} />
                </div>
                {github && <a href={`https://github.com/${github}`} target="_blank" rel="noopener"><button>GitHub profile ➔</button></a>}
                <Link href="/projects"><button>All projects ➔</button></Link>
            </div>
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
                blocks={skillsText.map(t => transformText(t))}
                {...sanityClient.config()} />
        </div>
        <Skills skills={skills} />
    </Section>
    {latestProject && <Section>
        <div className={styles.latestProjectTitle}>
            <h2>Latest project</h2>
        </div>
        <div/> {/* Empty div to make Project card 3rd child (i.e. odd) so mockup image is on left side */}
        <ProjectCard className={styles.latestProject} {...latestProject} />
        <Link href="/projects">
            <button className={styles.moreProjects}>More projects ➔</button>
        </Link>
    </Section>}
    <Carousel>
        {testimonials.map((q, i) => <QuoteBox key={i} {...q} />)}
    </Carousel>
</>

// Load props from config file
export const getStaticProps: GetStaticProps<HomeProps> = async _ => {
    const homeProps = await getHomepage()
    return {
        props: {
            ...homeProps
        }
    }
}

export default Home