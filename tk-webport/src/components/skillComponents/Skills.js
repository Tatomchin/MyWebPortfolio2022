import GameDevSkills from './GameDevSkills';
import ProgramingL from './ProgramingL';
import styles from './Skills.module.css'
import WebDevSkills from './WebDevSkills.js';


function Skills() {
    return (
        <div className={styles.SkillBg}>
            <h2>MY SKILLS</h2>
            <WebDevSkills/>
            <GameDevSkills/>
            <ProgramingL/>
        </div>
    )
}

export default Skills;