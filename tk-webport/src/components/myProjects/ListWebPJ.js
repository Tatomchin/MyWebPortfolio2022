import React, { useState } from 'react';
import styles from './ListWebPJ.module.css';
import stylesBG from './MyProjects.module.css';
import picGithub from '../../picture/assets/logo/github.png';

import ShowContentWebPJ from './ContentWebPj';

import { useInView } from 'react-intersection-observer';

let animListProejct = null;
function ListWebPJ({TagObserve}) {
    const [projectUL, projectULIsVisible] = useInView();
    if (TagObserve === true && projectULIsVisible === true && animListProejct === null) {
        animListProejct = styles.AnimListSkill;
    }

    const [showContentPJ1, setShowContentPJ1] = useState(null);
    const [showContentPJ2, setShowContentPJ2] = useState(null);
    const [showContentPJ3, setShowContentPJ3] = useState(null);

    const [btnShow1, setbtnShow1] = useState("Show 🔍");
    const [btnShow2, setbtnShow2] = useState("Show 🔍");
    const [btnShow3, setbtnShow3] = useState("Show 🔍");

    const [backgroundBlack, setBackgroundBlack] = useState(null);
    const [stateFullsizeImg, setStateFullsizeImg] = useState(null);

    const showFullSizeImg=(pic) => {
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

    function onClickShow(numPJ) {
        switch (numPJ) {
            case 0:
                if (!!showContentPJ1) {
                    setShowContentPJ1(<ShowContentWebPJ contentNumber={numPJ} hideContent={styles.hideContent} hideImgPjEx={styles.hideImgPjEx} hideText={styles.hideText}/>);
                    setbtnShow1("Show 🔍");
                    setTimeout(() => {
                        setShowContentPJ1(null);
                    }, 400);  
                } else {
                    setShowContentPJ1(<ShowContentWebPJ showFullSizeImg={showFullSizeImg} contentNumber={numPJ} hideContent={null} hideImgPjEx={null} hideText={null}/>);
                    setbtnShow1("Hide ❌");
                }
                break;
            case 1:
                if (!!showContentPJ2) {
                    setShowContentPJ2(<ShowContentWebPJ contentNumber={numPJ} hideContent={styles.hideContent} hideImgPjEx={styles.hideImgPjEx} hideText={styles.hideText}/>);
                    setbtnShow2("Show 🔍");
                    setTimeout(() => {   
                        setShowContentPJ2(null);  
                    }, 400);
                } else {
                    setShowContentPJ2(<ShowContentWebPJ showFullSizeImg={showFullSizeImg} contentNumber={numPJ} hideContent={null} hideImgPjEx={null} hideText={null}/>);
                    setbtnShow2("Hide ❌");
                }
                break;
            case 2:
                if (!!showContentPJ3) {
                    setShowContentPJ3(<ShowContentWebPJ contentNumber={numPJ} hideContent={styles.hideContent} hideImgPjEx={styles.hideImgPjEx} hideText={styles.hideText}/>);
                    setbtnShow3("Show 🔍");
                    setTimeout(() => { 
                        setShowContentPJ3(null);  
                    }, 400);
                } else {
                    setShowContentPJ3(<ShowContentWebPJ showFullSizeImg={showFullSizeImg} contentNumber={numPJ} hideContent={null} hideImgPjEx={null} hideText={null}/>);
                    setbtnShow3("Hide ❌");
                }
                break;
            default:
        }
    }

    return (
        <div className={stylesBG.contentMyProject}>
            <h3 ref={projectUL}>🌐 WEBSITE PROJECTS 🌐</h3>
            <ul className={`${animListProejct}`}> 
                <li className={stylesBG.listProject}>
                    <h4>
                        <a href="https://asean-information-itkmitl.netlify.app/">Apr 2020 ASEAN Information Web</a>
                        <a href="https://github.com/Tatomchin/AseanWebIT"><img className={styles.gitHubImg} src={picGithub} alt="GitHub Logo" /></a>
                        <br/><button className={`${stylesBG.btnShowPJ} ${!!showContentPJ1 ? stylesBG.activeBTN : stylesBG.noActiveBTN}`} onClick={() => { onClickShow(0) }}>{btnShow1}</button>
                    </h4>
                    {showContentPJ1}
                </li>
                <li className={stylesBG.listProject}>
                    <h4>
                        <a href="https://console-travel-rocketpj.netlify.app/">Sep 2020 Consoles's Travel</a>
                        <a href="https://github.com/Tatomchin/RockProject-MP2020"><img className={styles.gitHubImg} src={picGithub} alt="GitHub Logo" /></a>
                        <br/><button className={`${stylesBG.btnShowPJ} ${!!showContentPJ2 ? stylesBG.activeBTN : stylesBG.noActiveBTN}`} onClick={() => { onClickShow(1) }}>{btnShow2}</button>
                    </h4>
                    {showContentPJ2}
                </li>
                <li className={stylesBG.listProject}>
                    <h4>
                        <a href="https://cleanfield.netlify.app/">Nov 2020 Cleanfield Web</a>
                        <a href="https://github.com/Tatomchin/coopProject-Cleanfield"><img className={styles.gitHubImg} src={picGithub} alt="GitHub Logo" /></a>
                        <br/><button className={`${stylesBG.btnShowPJ} ${!!showContentPJ3 ? stylesBG.activeBTN : stylesBG.noActiveBTN}`} onClick={() => { onClickShow(2) }}>{btnShow3}</button>
                    </h4>
                    {showContentPJ3}
                </li>
            </ul>
            {backgroundBlack}
            {stateFullsizeImg}
        </div>
    )
}

export default ListWebPJ;