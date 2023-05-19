import styles from './Skills.module.css'

import GameDevSkills from './GameDevSkills';
import ProgramingL from './ProgramingL';
import WebDevSkills from './WebDevSkills.js';

import { useInView } from 'react-intersection-observer';

import paper from '../../picture/section2/paper.png';

let animSkillBg = null;
function Skills() {
    const [ skillImg , skillImgisVisible ] = useInView({threshold: 0.3});
    if (skillImgisVisible === true && animSkillBg === null){
        animSkillBg = styles.SkillBgAnim;
        document.documentElement.style.setProperty('--opacityBG--', 1);
    }
    return (
        <div className={`${styles.SkillBg} ${animSkillBg}`}>
            <img id={styles.bgPaper} className={``} src={paper} alt="Paper" ref={skillImg}/>
            <h2>MY SKILLS</h2>
            <WebDevSkills TagObserve={skillImgisVisible}/>
            <GameDevSkills TagObserve={skillImgisVisible}/>
            <ProgramingL TagObserve={skillImgisVisible}/>
        </div>
    )
}

export default Skills;