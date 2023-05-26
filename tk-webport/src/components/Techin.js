import PictureProfile from './PictureProfile';
import Sayhi from './Sayhi';
import styles from './Techin.module.css'
import { useContext, useState } from 'react';
import { ConData } from '../App.js'

// import imgGear1 from '../picture/section1/gear1.png';
// import imgGear2 from '../picture/section1/gear2.png';
// import imgGear3 from '../picture/section1/gear3.png';
import clipboardH from '../picture/section1/clipboardH.png';
import clipboardV from '../picture/section1/clipboardV.png';
import headLetter from '../picture/section1/HeadLetter.png';
import tailLetter from '../picture/section1/TailLetter.png';


function Techin() {
    const {st_scrollTagtop, windowDimension } = useContext(ConData);
    const [clipboardAxis, setClipboardAxis] = useState(null);
    const [checkClipboardAxis, setCheckClipboardAxis] = useState(true);

    if(windowDimension.winWidth < 600 && clipboardAxis === null){
        setClipboardAxis(clipboardV);
        setCheckClipboardAxis(false);
    } else if(windowDimension.winWidth >= 600 && clipboardAxis === null){
        setClipboardAxis(clipboardH);
        setCheckClipboardAxis(true);
    }
    if (checkClipboardAxis === true && windowDimension.winWidth < 600 && !!clipboardAxis) {
        setClipboardAxis(clipboardV);
        setCheckClipboardAxis(false);
    } else if (checkClipboardAxis === false && windowDimension.winWidth >= 600 && !!clipboardAxis) {
        setClipboardAxis(clipboardH);
        setCheckClipboardAxis(true);
    }
    return (
        <div id={styles.TechinIn}>
            {/* <img id={styles.imgGear1} src={imgGear1} alt="Gear1" />
            <img id={styles.imgGear2} src={imgGear2} alt="Gear2" />
            <img id={styles.imgGear3} src={imgGear3} alt="Gear3" /> */}
            
            <div id={styles.clipboard}>
                <img id={styles.imgClipboard} src={clipboardAxis} alt="Clipboard" />
                <PictureProfile />
                <Sayhi />
                <img id={styles.imgHeadLetter} src={headLetter} alt="HeadLetter" />
                <img id={styles.imgTailLetter} src={tailLetter} alt="TailLetter" />
            </div>

            <div id={styles.ScrollDown} className={`${st_scrollTagtop ? '': styles.ScrollDownFadeOut} `}>
                <a href="#Skills"><span></span>Scroll Down</a>
            </div>
        </div>
    )
}

export default Techin;