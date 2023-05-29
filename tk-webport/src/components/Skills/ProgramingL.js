import styles from './ListSkills.module.css'
import pythonPic from  '../../picture/section2/skillLogos/python.png'
import cPic from  '../../picture/section2/skillLogos/c.png'
import dbSQLPic from  '../../picture/section2/skillLogos/db.png'

import { useInView } from 'react-intersection-observer';

let animListSkill = null;
function ProgramingL({TagObserve}) {
    const [ listUL , listULisVisible ] = useInView();
    if (TagObserve === true && listULisVisible === true && animListSkill === null){
        animListSkill = styles.AnimListSkill;
        setTimeout(() => {
            document.documentElement.style.setProperty('--ListVisibility--', 'visible');
        }, 1000);
    }
    return (
        <div className={styles.bgSkillList}>
            <h4>PROGRAMING LANGUAGE</h4>
            <ul ref={listUL} className={`${styles.ListSkill} ${animListSkill}`}>
                <li><div><img src={pythonPic} alt="Python"/></div><p>Python</p></li>
                <li><div><img src={cPic} alt="C/C++"/></div><p>C/C++</p></li>
                <li><div><img src={dbSQLPic} alt="Database-SQL"/></div><p>Database-SQL</p></li>
            </ul>
        </div>
    )
}

export default ProgramingL;