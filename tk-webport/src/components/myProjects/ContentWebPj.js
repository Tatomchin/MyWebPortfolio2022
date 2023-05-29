import styles from './ListWebPJ.module.css';

import picAsean1 from '../../picture/section3/exProjects/web/asean/1.png';
import picAsean2 from '../../picture/section3/exProjects/web/asean/2.png';
import picAsean3 from '../../picture/section3/exProjects/web/asean/3.png';

import picConsole1 from '../../picture/section3/exProjects/web/rocket/1.png';
import picConsole2 from '../../picture/section3/exProjects/web/rocket/2.png';
import picConsole3 from '../../picture/section3/exProjects/web/rocket/3.png';

import picCleanfield1 from '../../picture/section3/exProjects/web/cleanfield/1.png';
import picCleanfield2 from '../../picture/section3/exProjects/web/cleanfield/2.png';
import picCleanfield3 from '../../picture/section3/exProjects/web/cleanfield/3.png';

function ShowContentWebPJ({ showFullSizeImg, contentNumber, hideContent, hideText, hideImgPjEx }) {
    const contentPJ = [(
        //ASEAN WEB  
        <div className={`${styles.pjContent} ${hideContent}`}>
            <p className={`${styles.pjText} ${hideText}`}>
                This is a website project for ASEAN information such as membership, national flag, national symbol and etc.
                This Project created which HTML, CSS and JS, this project is a segment of IT KMITL Web Technology Subject.
            </p>
            <div className={styles.imgProjects}>
                <img className={`${styles.imgPjEx} ${hideImgPjEx}`} src={picAsean1} onClick={() => showFullSizeImg(picAsean1)} alt="Asean 1" />
                <img className={`${styles.imgPjEx} ${hideImgPjEx}`} src={picAsean2} onClick={() => showFullSizeImg(picAsean2)} alt="Asean 2" />
                <img className={`${styles.imgPjEx} ${hideImgPjEx}`} src={picAsean3} onClick={() => showFullSizeImg(picAsean3)} alt="Asean 3" />
            </div>
            <div className={styles.btnTry}>
                <a className={`${styles.pjText} ${hideText}`} href="https://asean-information-itkmitl.netlify.app/">Click to View Web!</a>
            </div>
        </div>
    ),
    (
        //Consoles's Travel WEB
        <div className={`${styles.pjContent} ${hideContent}`}>
            <p className={`${styles.pjText} ${hideText}`}>
                This is a website project about the history of console game device since 1972-2017 consists of name of product,
                release date and popular game each device.
                Gimmick of this project is Duckhunt game, It builds which HTML, CSS and JS,
                it has inspired from DuckHunt on Famicom game console.
            </p>
            <div className={styles.imgProjects}>
                <img className={`${styles.imgPjEx} ${hideImgPjEx}`} src={picConsole1} onClick={() => showFullSizeImg(picConsole1)} alt="Consoles's Travel 1" />
                <img className={`${styles.imgPjEx} ${hideImgPjEx}`} src={picConsole2} onClick={() => showFullSizeImg(picConsole2)} alt="Consoles's Travel 2" />
                <img className={`${styles.imgPjEx} ${hideImgPjEx}`} src={picConsole3} onClick={() => showFullSizeImg(picConsole3)} alt="Consoles's Travel 3" />
            </div>
            <div className={styles.btnTry}>
                <a className={`${styles.pjText} ${hideText}`} href="https://console-travel-rocketpj.netlify.app">Click to View Web!</a>
            </div>
        </div>
    ),
    (
        //Clean Field WEB
        <div className={`${styles.pjContent} ${hideContent}`}>
            <p className={`${styles.pjText} ${hideText}`}>
                This is a project website that provides information on various fields of energy without fossil fuel such as light, wind, or water in Thailand.
                This project has created which HTML, CSS and JS and this project having cooperation between with Faculty of Architecture KMITL and Faculty of Information Technology KMITL.
            </p>
            <div className={styles.imgProjects}>
                <img className={`${styles.imgPjEx} ${hideImgPjEx}`} src={picCleanfield1} onClick={() => showFullSizeImg(picCleanfield1)} alt="Clean Field 1" />
                <img className={`${styles.imgPjEx} ${hideImgPjEx}`} src={picCleanfield2} onClick={() => showFullSizeImg(picCleanfield2)} alt="Clean Field 2" />
                <img className={`${styles.imgPjEx} ${hideImgPjEx}`} src={picCleanfield3} onClick={() => showFullSizeImg(picCleanfield3)} alt="Clean Field 3" />
            </div>
            <div className={styles.btnTry}>
                <a className={`${styles.pjText} ${hideText}`} href="https://cleanfield.netlify.app/">Click to View Web!</a>
            </div>
        </div>
    ),
    ]
    return (
        contentPJ[contentNumber]
    )
}

export default ShowContentWebPJ;