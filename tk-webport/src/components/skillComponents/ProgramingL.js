import styles from './ListSkills.module.css'
import pythonPic from  '../../picture/skillLogos/python.png'
import cPic from  '../../picture/skillLogos/c.png'
import dbSQLPic from  '../../picture/skillLogos/db.png'


function ProgramingL() {
    return (
        <div>
            <h4>PROGRAMING LANGUAGE</h4>
            <ul className={styles.ListSkill}>
                <li><div><img src={pythonPic} alt="Python"/></div><p>Python</p></li>
                <li><div><img src={cPic} alt="C/C++"/></div><p>C/C++</p></li>
                <li><div><img src={dbSQLPic} alt="Database-SQL"/></div><p>Database-SQL</p></li>
            </ul>
        </div>
    )
}

export default ProgramingL;