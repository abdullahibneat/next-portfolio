import { FunctionComponent } from "react"
import styles from "../styles/Skills.module.css"

export type Skill = {
    name: string,
    description: string
}

type SkillsProps = {
    skills: Skill[],
    className?: string
}

const Skills: FunctionComponent<SkillsProps> = ({ skills, className = "" }) => <div className={`${styles.container} ${className}`}>
    {skills.map(s =>
        <div className={styles.skill}>
            <h3>{s.name}</h3>
            <p>{s.description}</p>
        </div>
    )}
</div>

export default Skills