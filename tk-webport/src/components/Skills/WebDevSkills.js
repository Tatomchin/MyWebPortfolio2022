import styles from './ListSkills.module.css'
import htmlPic from '../../picture/section2/skillLogos/html.png'
import cssPic from '../../picture/section2/skillLogos/css.png'
import jsPic from '../../picture/section2/skillLogos/js.png'
import reactPic from '../../picture/section2/skillLogos/react.png'
import nodeJsPic from '../../picture/section2/skillLogos/nodeJS.png'

import { useInView } from 'react-intersection-observer';

let animListSkill = null;
function WebDevSkills({ TagObserve }) {
    const [listUL, listULisVisible] = useInView();
    if (TagObserve === true && listULisVisible === true && animListSkill === null) {
        animListSkill = styles.AnimListSkill;
        setTimeout(() => {
            document.documentElement.style.setProperty('--ListVisibility--', 'visible');
        }, 1000);
    }
    return (
        <div className={styles.bgSkillList}>
            <h4 ref={listUL} >WEB SITE DEVELOPMENT</h4>
            <ul className={`${styles.ListSkill} ${animListSkill}`}>
                <li><div><img src={htmlPic} alt="HTML" /></div><p>HTML</p></li>
                <li><div><img src={cssPic} alt="CSS" /></div><p>CSS</p></li>
                <li><div><img src={jsPic} alt="Java Scrit" /></div><p>JS</p></li>
                <li><div><img src={reactPic} alt="React" /></div><p>React</p></li>
                <li><div><img src={nodeJsPic} alt="NodeJS" /></div><p>NodeJS</p></li>
            </ul>
        </div>
    )
}

export default WebDevSkills;