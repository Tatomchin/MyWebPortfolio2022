import styles from './ListSkills.module.css'
import unrealPic from  '../../picture/skillLogos/ue.png'
import mayalPic from  '../../picture/skillLogos/maya.png'
import zbrushPic from  '../../picture/skillLogos/zbrush.png'


function GameDevSkills() {
    return (
        <div>
            <h4>GAME DEVELOPMENT</h4>
            <ul className={styles.ListSkill}>
                <li><div><img src={unrealPic} alt="Unreal Engine 4"/></div><p>Unreal Engine 4</p></li>
                <li><div><img src={mayalPic} alt="Maya"/></div><p>Maya</p></li>
                <li><div><img src={zbrushPic} alt="Zbrush"/></div><p>Zbrush</p></li>
            </ul>
        </div>
    )
}

export default GameDevSkills;