import styles from './ListSkills.module.css'
import unrealPic from  '../../picture/skillLogos/ue.png'
import mayalPic from  '../../picture/skillLogos/maya.png'
import zbrushPic from  '../../picture/skillLogos/zbrush.png'

import { useInView } from 'react-intersection-observer';

let animListSkill = null;
function GameDevSkills({TagObserve}) {
    const [ listUL , listULisVisible ] = useInView();
    if (TagObserve === true && listULisVisible === true && animListSkill === null){
        animListSkill = styles.AnimListSkill;
        setTimeout(() => {
            document.documentElement.style.setProperty('--ListVisibility--', 'visible');
        }, 1000);
    }
    return (
        <div className={styles.bgSkillList}>
            <h4>GAME DEVELOPMENT</h4>
            <ul ref={listUL} className={`${styles.ListSkill} ${animListSkill}`}>
                <li><div><img src={unrealPic} alt="Unreal Engine 4"/></div><p>Unreal Engine 4</p></li>
                <li><div><img src={mayalPic} alt="Maya"/></div><p>Maya</p></li>
                <li><div><img src={zbrushPic} alt="Zbrush"/></div><p>Zbrush</p></li>
            </ul>
        </div>
    )
}

export default GameDevSkills;