import styles from './ListSkills.module.css'
import htmlPic from  '../../picture/skillLogos/html.png'
import cssPic from  '../../picture/skillLogos/css.png'
import jsPic from  '../../picture/skillLogos/js.png'
import reactPic from  '../../picture/skillLogos/react.png'
import nodeJsPic from  '../../picture/skillLogos/nodeJS.png'

function WebDevSkills() {
    return (
        <div>
            <h4>WEB SITE DEVELOPMENT</h4>
            <ul className={styles.ListSkill}>
                <li><div><img src={htmlPic} alt="HTML"/></div><p>HTML</p></li>
                <li><div><img src={cssPic} alt="CSS"/></div><p>CSS</p></li>
                <li><div><img src={jsPic} alt="Java Scrit"/></div><p>JS</p></li>
                <li><div><img src={reactPic} alt="React"/></div><p>React</p></li>
                <li><div><img src={nodeJsPic} alt="NodeJS"/></div><p>NodeJS</p></li>
            </ul>
        </div>
    )
}

export default WebDevSkills;