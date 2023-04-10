import styles from './Skills.module.css'
import WebDevSkills from './WebDevSkills.js';


function Skills() {
    return (
        <div className={styles.SkillBg}>
            <h2>MY SKILLS</h2>
            <WebDevSkills/>
            <h4>GAMES DEVELOPMENT</h4>
            <ul>
                <li>Unreal Engine 4</li>
                <li>Maya</li>
                <li>Zbrush</li>
            </ul>
            <h4>PROGRAMING LANGUAGE</h4>
            <ul>
                <li>Python</li>
                <li>C/C++</li>
                <li>SQL</li>
            </ul>
        </div>
    )
}

export default Skills;