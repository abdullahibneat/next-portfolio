import Browser from "../components/Browser"
import HeroSection from "../components/HeroSection"
import Section from "../components/Section"
import Swiper from "../components/Swiper"
import styles from "../styles/Home.module.css"

const Home = () => <>
    <HeroSection className={styles.hero}>
        <Section className={styles.heroContent}>
            <div className={styles.heroText}>
                Consectetur adipiscing elit. Mauris in est scelerisque, scelerisque risus vel, tincidunt dolor.
            </div>
            <div className={styles.content}>
                <Swiper zDistance={150} className={styles.swiper}>
                    <Browser className={styles.browser}>1</Browser>
                    <Browser className={styles.browser}>2</Browser>
                    <Browser className={styles.browser}>3</Browser>
                </Swiper>
                <img className={styles.label} src="ft-projects.png" draggable={false}/>
            </div>
        </Section>
    </HeroSection>
</>

export default Home