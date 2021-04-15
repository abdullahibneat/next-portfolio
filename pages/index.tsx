import Meta from "@components/Meta"
import Browser from "@components/Browser"
import Carousel from "@components/Carousel"
import HeroSection from "@components/HeroSection"
import QuoteBox, { Quote } from "@components/QuoteBox"
import Section from "@components/Section"
import Skills, { Skill } from "@components/Skills"
import Swiper from "@components/Swiper"
import styles from "@styles/Home.module.css"

const skills: Skill[] = [
    { name: "Full Stack Development", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nobis?" },
    { name: "Java and Kotlin Development", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nobis?" },
    { name: "Databases", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nobis?" },
    { name: "Git", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nobis?" }
]

const testimonials: Quote[] = [
    { author: "Adam Smith", text: "Lorem ipsum dolor sit amet <strong>consectetur</strong> adipisicing elit. Corrupti mollitia voluptatibus <strong>aliquam</strong> maiores, nesciunt dolorum!" },
    { author: "John Smith", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quis natus perspiciatis vero facilis repellendus?" },
    { author: "John Doe", text: "Lorem ipsum dolor sit amet consectetur <strong>adipisicing</strong> elit. Autem, quis natus perspiciatis vero facilis repellendus?" },
]

const Home = () => <>
    <Meta title="Home" />
    <HeroSection className={styles.hero}>
        <Section className={styles.heroContent}>
            <div className={styles.heroText}>
                Consectetur adipiscing elit. Mauris in est scelerisque, scelerisque risus vel, tincidunt dolor.
            </div>
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
        <Skills skills={skills} className={styles.skillsBox} />
        <div className={styles.skillsContent}>
            <h1>Skills</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dignissimos a! Sed nisi laborum porro asperiores veniam earum recusandae nesciunt incidunt vitae aliquid minus omnis dolorum, iste beatae voluptas dolor!</p>
        </div>
    </Section>
    <Carousel style={{ marginBottom: "5rem" }}>
        {testimonials.map((q, i) => <QuoteBox key={i} {...q} />)}
    </Carousel>
</>

export default Home