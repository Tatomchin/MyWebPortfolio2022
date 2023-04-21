import styles from './ListGamePJ.module.css';
import { useState } from 'react';

import picduckHunt1 from '../../picture/exProjects/game/duckhunt/1.png';
import picduckHunt2 from '../../picture/exProjects/game/duckhunt/2.png';
import picduckHunt3 from '../../picture/exProjects/game/duckhunt/3.png';

import picdeadLineSpace1 from '../../picture/exProjects/game/dead-line-space/1.png';
import picdeadLineSpace2 from '../../picture/exProjects/game/dead-line-space/2.png';
import picdeadLineSpace3 from '../../picture/exProjects/game/dead-line-space/3.png';

function ShowContentGamePJ({ contentNumber }) {
    const [backgroundBlack, setBackgroundBlack] = useState(null);
    const [stateFullsizeImg, setStateFullsizeImg] = useState(null);

    function showFullSizeImg(pic) {
        setBackgroundBlack(<div className={styles.blackGroundBlack} onClick={hideFullsizeImg} />)
        setStateFullsizeImg(
            <div className={styles.BorderFullSizeImge}>
                <img className={styles.FullSizeImge} src={pic} alt="FullSizeImage" onClick={hideFullsizeImg} />
            </div>
        )
    }

    function hideFullsizeImg() {
        setBackgroundBlack(null);
        setStateFullsizeImg(null);
    }

    const contentPJ = [
        (
            //DROP QUEST
            <div className={styles.pjContent}>
                <p>This is game for learning about chemistry.</p>
                <p><b>Awards for this project.</b></p>
                <ul>
                    <li>19th ECTI-CON (International Conference on Electrical Engineering/Electronics, Computer, Telecommunications and Information Techonology) 2022 HUA HIN, Thailand)</li>
                    <li>24th NSC 2022(National Software Contest) Entered finals</li>
                </ul>
                <div>
                    <iframe src="https://drive.google.com/file/d/1HGJQkrxEQTTGBGz78Bo-JLCSP5NCf7Lj/preview" width="560" height="315" title="DropQuestVDO" allow="autoplay"></iframe>
                </div>
            </div>
        ),
        (
            //JUST COOK
            <div className={styles.pjContent}>
                <iframe src="https://drive.google.com/file/d/1GGUJYpz8EdtUHWGoiBaHjjGgt0S_SPOx/preview" width="560" height="315" title="JustCookVDO" allow="autoplay"></iframe>
            </div>
        ),
        (
            //DUCK HUNT
            <div className={styles.pjContent}>
                <div>
                    <img className={styles.imgPjEx} src={picduckHunt1} onClick={()=>showFullSizeImg(picduckHunt1)} alt="DuckHunt 1" />
                    <img className={styles.imgPjEx} src={picduckHunt2} onClick={()=>showFullSizeImg(picduckHunt2)} alt="DuckHunt 2" />
                    <img className={styles.imgPjEx} src={picduckHunt3} onClick={()=>showFullSizeImg(picduckHunt3)} alt="DuckHunt 3" />
                </div>
                <div>
                    <a href="https://duckhunt-js-tk.netlify.app/">Click to play!</a>
                </div>
                {backgroundBlack}
                {stateFullsizeImg}
            </div>
        ), (
            //DEAD LINE SPACE
            <div className={styles.pjContent}>
                <div>
                    <img className={styles.imgPjEx} src={picdeadLineSpace1} onClick={()=>showFullSizeImg(picdeadLineSpace1)} alt="DeadLineSpace 1" />
                    <img className={styles.imgPjEx} src={picdeadLineSpace2} onClick={()=>showFullSizeImg(picdeadLineSpace2)} alt="DeadLineSpace 2" />
                    <img className={styles.imgPjEx} src={picdeadLineSpace3} onClick={()=>showFullSizeImg(picdeadLineSpace3)} alt="DeadLineSpace 3" />
                </div>
                <div>
                    <a href="https://dead-line-space-firstpj.netlify.app/">Click to play!</a>
                </div>
                {backgroundBlack}
                {stateFullsizeImg}
            </div>
        )
    ]
    return (contentPJ[contentNumber])
}
export default ShowContentGamePJ;