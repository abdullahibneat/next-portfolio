import { FunctionComponent } from "react"
import styles from "@styles/Skills.module.css"
import { Skill } from "types"

type SkillsProps = {
    skills: Skill[],
    className?: string
}

const Skills: FunctionComponent<SkillsProps> = ({ skills, className = "" }) => <div className={`${styles.container} ${className}`}>
    {skills.map((s, i) =>
        <div key={i} className={styles.skill}>
            <img src={s.icon} alt={s.name}/>
            <p>{s.name}</p>
        </div>
    )}
</div>

export default Skills