import styles from './ListWebPJ.module.css';
import { useState } from 'react';

import picAsean1 from '../../picture/exProjects/web/asean/1.png';
import picAsean2 from '../../picture/exProjects/web/asean/2.png';
import picAsean3 from '../../picture/exProjects/web/asean/3.png';

import picConsole1 from '../../picture/exProjects/web/rocket/1.png';
import picConsole2 from '../../picture/exProjects/web/rocket/2.png';
import picConsole3 from '../../picture/exProjects/web/rocket/3.png';

import picCleanfield1 from '../../picture/exProjects/web/cleanfield/1.png';
import picCleanfield2 from '../../picture/exProjects/web/cleanfield/2.png';
import picCleanfield3 from '../../picture/exProjects/web/cleanfield/3.png';

function ShowContentWebPJ({ contentNumber }) {
    const [backgroundBlack, setBackgroundBlack] = useState(null);
    const [stateFullsizeImg, setStateFullsizeImg] = useState(null);

    function showFullSizeImg(pic) {
        setBackgroundBlack(<div className={styles.blackGroundBlack} onClick={hideFullsizeImg}/>)
        setStateFullsizeImg(
            <div className={styles.BorderFullSizeImge}>
                <img className={styles.FullSizeImge} src={pic} alt="FullSizeImage" onClick={hideFullsizeImg}/>
            </div>
        )
    }

    function hideFullsizeImg(){
        setBackgroundBlack(null);
        setStateFullsizeImg(null);
    }

    const contentPJ = [(
        //ASEAN WEB  
        <div className={styles.pjContent}>
            <p>อธิบายโปรเจคจ้าาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาา</p>
            <div>
                <img className={styles.imgPjEx} src={picAsean1} onClick={()=>showFullSizeImg(picAsean1)} alt="Asean 1" />
                <img className={styles.imgPjEx} src={picAsean2} onClick={()=>showFullSizeImg(picAsean2)} alt="Asean 2" />
                <img className={styles.imgPjEx} src={picAsean3} onClick={()=>showFullSizeImg(picAsean3)} alt="Asean 3" />
            </div>
            {backgroundBlack}
            {stateFullsizeImg}
        </div>
    ),
    (
        //Consoles's Travel WEB
        <div className={styles.pjContent}>
            <p>อธิบายโปรเจคจ้าาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาา</p>
            <div>
                <img className={styles.imgPjEx} src={picConsole1} onClick={()=>showFullSizeImg(picConsole1)} alt="Consoles's Travel 1" />
                <img className={styles.imgPjEx} src={picConsole2} onClick={()=>showFullSizeImg(picConsole2)} alt="Consoles's Travel 2" />
                <img className={styles.imgPjEx} src={picConsole3} onClick={()=>showFullSizeImg(picConsole3)} alt="Consoles's Travel 3" />
            </div>
            {backgroundBlack}
            {stateFullsizeImg}
        </div>
    ),
    (
        //Clean Field WEB
        <div className={styles.pjContent}>
            <p>อธิบายโปรเจคจ้าาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาา</p>
            <div>
                <img className={styles.imgPjEx} src={picCleanfield1} onClick={()=>showFullSizeImg(picCleanfield1)} alt="Clean Field 1" />
                <img className={styles.imgPjEx} src={picCleanfield2} onClick={()=>showFullSizeImg(picCleanfield2)} alt="Clean Field 2" />
                <img className={styles.imgPjEx} src={picCleanfield3} onClick={()=>showFullSizeImg(picCleanfield3)} alt="Clean Field 3" />
            </div>
            {backgroundBlack}
            {stateFullsizeImg}
        </div>
    ),
    ]
    return (
        contentPJ[contentNumber]
    )
}

export default ShowContentWebPJ;