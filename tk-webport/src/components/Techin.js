import PictureProfile from './PictureProfile';
import Sayhi from './Sayhi';
import styles from './Techin.module.css'
import { useContext, useState } from 'react';
import { ConData } from '../App.js'

import clipboardH from '../picture/section1/clipboardH.png';
import clipboardV from '../picture/section1/clipboardV.png';
import clipboardH_Back from '../picture/section1/clipboardH_Back.png';
import clipboardV_Back from '../picture/section1/clipboardV_Back.png';
import headLetter from '../picture/section1/HeadLetter.png';
import tailLetter from '../picture/section1/TailLetter.png';
import arrowFlip from '../picture/section1/flipArrow.png';
import MyInfo from './myInfo';

function switchRotate(key) {
    switch (key) {
        case true:
            document.documentElement.style.setProperty('--flipRotate--', '180deg');
            break;
        case false:
            document.documentElement.style.setProperty('--flipRotate--', '0deg');
            break;
        default:
    }
}

function Techin() {
    const { st_scrollTagtop, windowDimension } = useContext(ConData);
    const [clipboardAxis, setClipboardAxis] = useState(null);
    const [clipboardBackAxis, setClipboardBackAxis] = useState(null);
    const [checkClipboardAxis, setCheckClipboardAxis] = useState(true);

    if (windowDimension.winWidth < 600 && clipboardAxis === null) {
        setClipboardAxis(clipboardV);
        setClipboardBackAxis(clipboardV_Back);
        setCheckClipboardAxis(false);
    } else if (windowDimension.winWidth >= 600 && clipboardAxis === null) {
        setClipboardAxis(clipboardH);
        setClipboardBackAxis(clipboardH_Back);
        setCheckClipboardAxis(true);
    }
    if (checkClipboardAxis === true && windowDimension.winWidth < 600 && !!clipboardAxis) {
        setClipboardAxis(clipboardV);
        setClipboardBackAxis(clipboardV_Back);
        setCheckClipboardAxis(false);
    } else if (checkClipboardAxis === false && windowDimension.winWidth >= 600 && !!clipboardAxis) {
        setClipboardAxis(clipboardH);
        setClipboardBackAxis(clipboardH_Back);
        setCheckClipboardAxis(true);
    }
    return (
        <div id={styles.TechinIn}>
            <div className={`${styles.flipBox}`}>
                <img id={styles.imgHeadLetter} src={headLetter} alt="HeadLetter" />
                <img id={styles.imgTailLetter} src={tailLetter} alt="TailLetter" />
                <div className={`${styles.flipBoxInner} ${styles.flipRotate}`}>
                    <div id={styles.clipboard} className={styles.flipBoxFront}>
                        <img id={styles.imgClipboard} src={clipboardAxis} alt="Clipboard" />
                        <PictureProfile />
                        <Sayhi />
                        <div className={styles.arrowFlip} onClick={()=>switchRotate(true)}>
                            <h4 id={styles.arrowFlipTextFont}>Personal Information !</h4>
                            <img id={styles.imgArrowFlipFont} src={arrowFlip} alt="Arrow Flip" />
                        </div>
                    </div>
                    <div id={styles.clipboardBack} className={styles.flipBoxBack} onClick={()=>switchRotate(false)}>
                        <img id={styles.imgClipboardBack} src={clipboardBackAxis} alt="Clipboard_Back" />
                        <MyInfo />
                        <div className={styles.arrowFlip}>
                            <h4 id={styles.arrowFlipTextBack}>Back</h4>
                            <img id={styles.imgArrowFlipBack} src={arrowFlip} alt="Arrow Flip" />
                        </div>
                    </div>
                </div>
            </div>
            <div id={styles.ScrollDown} className={`${st_scrollTagtop ? '' : styles.ScrollDownFadeOut} `}>
                <a href="#Skills"><span></span>Scroll Down</a>
            </div>
        </div>
    )
}

export default Techin;