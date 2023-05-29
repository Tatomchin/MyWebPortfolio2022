import styles from './ListGamePJ.module.css';

import cerECTICON from '../../picture/section3/certificate/ECTI-CON.png';
import cerNSC1 from '../../picture/section3/certificate/NSC1.jpg';
import cerNSC2 from '../../picture/section3/certificate/NSC2.jpg';

import picduckHunt1 from '../../picture/exProjects/game/duckhunt/1.png';
import picduckHunt2 from '../../picture/exProjects/game/duckhunt/2.png';
import picduckHunt3 from '../../picture/exProjects/game/duckhunt/3.png';

import picdeadLineSpace1 from '../../picture/exProjects/game/dead-line-space/1.png';
import picdeadLineSpace2 from '../../picture/exProjects/game/dead-line-space/2.png';
import picdeadLineSpace3 from '../../picture/exProjects/game/dead-line-space/3.png';

function ShowContentGamePJ({ showFullSizeImg, showFullSizeImgCer, contentNumber, hideContent, hideText, hideImgPjEx }) {
    const contentPJ = [
        (
            //DROP QUEST
            <div id={styles.DropQuest} className={`${styles.DropQuest} ${hideContent}`}>
                <p className={`${styles.pjText} ${hideText}`} >
                    This is a game project for learning the elements of chemical at high school in Thailand.
                    This game has multiplayer gameplay run on the Android platform. Building by Unreal Engine 4.
                    This is game received a certificate from 24th  NSC 2022 (National Software Contest)
                    Entered finals and 19th ECTI-CON (International Conference on Electrical Engineering/Electronics, Computer, Telecommunications and Information Technology).
                </p>
                <h4 className={`${styles.pjText} ${hideText} ${styles.pjh4}`} ><b>🏆 Certificate for this project. 🏆</b></h4>
                <ul className={`${styles.pjText} ${hideText} ${styles.pjUL}`}>
                    <li>19th ECTI-CON (International Conference on Electrical Engineering/Electronics, Computer, Telecommunications and Information Techonology) 2022 HUA HIN, Thailand)</li>
                    <li>24th NSC 2022(National Software Contest) Entered finals</li>
                </ul>
                <div className={styles.imgProjects} id={styles.Certificate}>
                    <img className={`${styles.imgPjEx} ${hideImgPjEx}`} src={cerNSC1} onClick={() => showFullSizeImgCer(cerNSC1)} alt="NSC1" />
                    <img className={`${styles.imgPjEx} ${hideImgPjEx}`} src={cerNSC2} onClick={() => showFullSizeImgCer(cerNSC2)} alt="NSC2" />
                    <img className={`${styles.imgPjEx} ${hideImgPjEx}`} src={cerECTICON} onClick={() => showFullSizeImgCer(cerECTICON)} alt="ECTI-CON" />
                </div>
                <div className={`${styles.exVDO} ${hideText}`}>
                    <iframe src="https://drive.google.com/file/d/1HGJQkrxEQTTGBGz78Bo-JLCSP5NCf7Lj/preview" title="DropQuestVDO" allow="autoplay"></iframe>
                </div>
            </div>
        ),
        (
            //JUST COOK
            <div className={`${styles.JustCook} ${hideContent}`}>
                <p className={`${styles.pjText} ${hideText}`} >
                    This is a game arcade project on the computer PC.
                    A player must role-play to be a chef and cooking for sale and score high.
                    This game has inspired, from OverCook and built which Unreal Engine 4.
                    This project is a segment of Game Develop IT KMITL Subject.</p>
                <div className={`${styles.exVDO} ${hideText}`}>
                    <iframe src="https://drive.google.com/file/d/1GGUJYpz8EdtUHWGoiBaHjjGgt0S_SPOx/preview" title="JustCookVDO" allow="autoplay"></iframe>
                </div>
            </div>
        ),
        (
            //DUCK HUNT
            <div className={`${styles.DuckHunt} ${hideContent}`}>
                <p className={`${styles.pjText} ${hideText}`}>
                    DuckHunt project is a segment of Consoles’s Travel website project.
                    This game was built which HTML, CSS and JS and I have inspiration from Duck Hunt Game on Famicom game console device.
                </p>
                <div className={styles.imgProjects}>
                    <img className={`${styles.imgPjEx} ${hideImgPjEx}`} src={picduckHunt1} onClick={() => showFullSizeImg(picduckHunt1)} alt="DuckHunt 1" />
                    <img className={`${styles.imgPjEx} ${hideImgPjEx}`} src={picduckHunt2} onClick={() => showFullSizeImg(picduckHunt2)} alt="DuckHunt 2" />
                    <img className={`${styles.imgPjEx} ${hideImgPjEx}`} src={picduckHunt3} onClick={() => showFullSizeImg(picduckHunt3)} alt="DuckHunt 3" />
                </div>
                <div className={styles.btnTry}>
                    <a className={`${styles.pjText} ${hideText}`} href="https://duckhunt-js-tk.netlify.app/">Click try to play!</a>
                </div>
            </div>
        ), (
            //DEAD LINE SPACE
            <div className={`${styles.DeadLineSpace} ${hideContent}`}>
                <p className={`${styles.pjText} ${hideText}`}>
                    This is my first website game project.
                    I and my friends has built this project together,
                    we have inspiration from Rocket Shooting Game style from an old game device such as Game Boy Advanced.
                    This project is a segment of Multimedia Technology IT KMITL subject.
                </p>
                <div className={styles.imgProjects}>
                    <img className={`${styles.imgPjEx} ${hideImgPjEx}`} src={picdeadLineSpace1} onClick={() => showFullSizeImg(picdeadLineSpace1)} alt="DeadLineSpace 1" />
                    <img className={`${styles.imgPjEx} ${hideImgPjEx}`} src={picdeadLineSpace2} onClick={() => showFullSizeImg(picdeadLineSpace2)} alt="DeadLineSpace 2" />
                    <img className={`${styles.imgPjEx} ${hideImgPjEx}`} src={picdeadLineSpace3} onClick={() => showFullSizeImg(picdeadLineSpace3)} alt="DeadLineSpace 3" />
                </div>
                <div className={styles.btnTry}>
                    <a className={`${styles.pjText} ${hideText}`} href="https://dead-line-space-firstpj.netlify.app/">Click try to play!</a>
                </div>
            </div>
        )
    ]
    return (contentPJ[contentNumber])
}
export default ShowContentGamePJ;