import styles from './Skills.module.css'

import GameDevSkills from './GameDevSkills';
import ProgramingL from './ProgramingL';
import WebDevSkills from './WebDevSkills.js';

import { useInView } from 'react-intersection-observer';

let animSkillBg = null;
function Skills() {
    const [ skillBG , skillBGisVisible ] = useInView({threshold: 0.3});
    if (skillBGisVisible === true && animSkillBg === null){
        animSkillBg = styles.SkillBgAnim;
        document.documentElement.style.setProperty('--opacityBG--', 1);
    }
    return (
        <div className={`${styles.SkillBg} ${animSkillBg}`} ref={skillBG}>
            <div className={styles.HeadSkill}><h2>MY SKILLS</h2></div>
            <WebDevSkills TagObserve={skillBGisVisible}/>
            <GameDevSkills TagObserve={skillBGisVisible}/>
            <ProgramingL TagObserve={skillBGisVisible}/>
        </div>
    )
}

export default Skills;