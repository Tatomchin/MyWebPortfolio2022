import styles from './ListGamePJ.module.css'

import picduckHunt1 from '../../picture/exProjects/game/duckhunt/1.png'
import picduckHunt2 from '../../picture/exProjects/game/duckhunt/2.png'
import picduckHunt3 from '../../picture/exProjects/game/duckhunt/3.png'

import picdeadLineSpace1 from '../../picture/exProjects/game/dead-line-space/1.png'
import picdeadLineSpace2 from '../../picture/exProjects/game/dead-line-space/2.png'
import picdeadLineSpace3 from '../../picture/exProjects/game/dead-line-space/3.png'

function ListGamePJ() {
    return (
        <div>
            <h3>GAME PROJECTS</h3>
            <ul>
                <li className={styles.listProject}>
                    <h4>
                        May 2022 DropQuest (UE4)
                    </h4>
                    <p>This is game for learning about chemistry.</p>
                    <p><b>Awards for this project.</b></p>
                    <ul>
                        <li>19th ECTI-CON (International Conference on Electrical Engineering/Electronics, Computer, Telecommunications and Information Techonology) 2022 HUA HIN, Thailand)</li>
                        <li>24th NSC 2022(National Software Contest) Entered finals</li>
                    </ul>
                    <div>
                        <iframe src="https://drive.google.com/file/d/1HGJQkrxEQTTGBGz78Bo-JLCSP5NCf7Lj/preview" width="560" height="315" title="DropQuestVDO" allow="autoplay"></iframe>
                    </div>
                </li>
                <li className={styles.listProject}>
                    <h4>
                        Dec 2020 JustCook (UE4)
                    </h4>
                    <div>
                        <iframe src="https://drive.google.com/file/d/1GGUJYpz8EdtUHWGoiBaHjjGgt0S_SPOx/preview" width="560" height="315" title="JustCookVDO" allow="autoplay"></iframe>
                    </div>
                </li>
                <li className={styles.listProject}>
                    <h4>
                        Sep 2020 DuckHunt for Consoles's Travel Web (JS)
                    </h4>
                    <div>
                        <img src={picduckHunt1} alt="DuckHunt 1" />
                        <img src={picduckHunt2} alt="DuckHunt 2" />
                        <img src={picduckHunt3} alt="DuckHunt 3" />
                    </div>
                    <div>
                        <a href="https://duckhunt-js-tk.netlify.app/">Click to play!</a>
                    </div>
                </li>
                <li className={styles.listProject}>
                    <h4>
                        Mar 2019 DeadLineSpace Game (JS)
                    </h4>
                    <div>
                        <img src={picdeadLineSpace1} alt="DeadLineSpace 1" />
                        <img src={picdeadLineSpace2} alt="DeadLineSpace 2" />
                        <img src={picdeadLineSpace3} alt="DeadLineSpace 3" />
                    </div>
                    <div>
                        <a href="https://dead-line-space-firstpj.netlify.app/">Click to play!</a>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ListGamePJ;