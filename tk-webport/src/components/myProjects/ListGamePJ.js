import React, { useState } from 'react';
import styles from './ListGamePJ.module.css';
import stylesBG from './MyProjects.module.css';
import picGithub from '../../picture/logo/github.png';

import ShowContentGamePJ from './ContentGamePj';

import { useInView } from 'react-intersection-observer';

let animListProejct = null;
function ListGamePJ({ TagObserve }) {
    const [projectUL, projectULIsVisible] = useInView();
    if (TagObserve === true && projectULIsVisible === true && animListProejct === null) {

        animListProejct = styles.AnimListSkill;
    }

    const [showContentPJ1, setShowContentPJ1] = useState(null);
    const [showContentPJ2, setShowContentPJ2] = useState(null);
    const [showContentPJ3, setShowContentPJ3] = useState(null);
    const [showContentPJ4, setShowContentPJ4] = useState(null);

    const [btnShow1, setbtnShow1] = useState("Show 🔍");
    const [btnShow2, setbtnShow2] = useState("Show 🔍");
    const [btnShow3, setbtnShow3] = useState("Show 🔍");
    const [btnShow4, setbtnShow4] = useState("Show 🔍");

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

    function showFullSizeImgCer(picCer) {
        setBackgroundBlack(<div className={styles.blackGroundBlack} onClick={hideFullsizeImg} />)
        setStateFullsizeImg(
            <div className={styles.BorderFullSizeImge}>
                <img className={styles.FullSizeImgeCer} src={picCer} alt="FullSizeImage" onClick={hideFullsizeImg} />
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
                    setShowContentPJ1(<ShowContentGamePJ contentNumber={numPJ} hideContent={styles.DropQuestFadeUp} hideImgPjEx={styles.hideImgPjEx} hideText={styles.hideText} />);
                    setbtnShow1("Show 🔍");
                    setTimeout(() => {
                        setShowContentPJ1(null);
                    }, 400);
                } else {
                    setShowContentPJ1(<ShowContentGamePJ showFullSizeImg={showFullSizeImg} showFullSizeImgCer={showFullSizeImgCer}
                        contentNumber={numPJ} hideContent={null} hideImgPjEx={null} hideText={null} />);
                    setbtnShow1("Hide ❌");
                }

                break;
            case 1:
                if (!!showContentPJ2) {
                    setShowContentPJ2(<ShowContentGamePJ contentNumber={numPJ} hideContent={styles.JustCookFadeUp} hideImgPjEx={styles.hideImgPjEx} hideText={styles.hideText} />);
                    setbtnShow2("Show 🔍");
                    setTimeout(() => {
                        setShowContentPJ2(null);
                    }, 400);
                } else {
                    setShowContentPJ2(<ShowContentGamePJ showFullSizeImg={showFullSizeImg} showFullSizeImgCer={showFullSizeImgCer}
                        contentNumber={numPJ} hideContent={null} hideImgPjEx={null} hideText={null} />);
                    setbtnShow2("Hide ❌");
                }
                break;
            case 2:
                if (!!showContentPJ3) {
                    setShowContentPJ3(<ShowContentGamePJ contentNumber={numPJ} hideContent={styles.DuckHuntFadeUp} hideImgPjEx={styles.hideImgPjEx} hideText={styles.hideText} />);
                    setbtnShow3("Show 🔍");
                    setTimeout(() => {
                        setShowContentPJ3(null);
                    }, 400);
                } else {
                    setShowContentPJ3(<ShowContentGamePJ showFullSizeImg={showFullSizeImg} showFullSizeImgCer={showFullSizeImgCer}
                        contentNumber={numPJ} hideContent={null} hideImgPjEx={null} hideText={null} />);
                    setbtnShow3("Hide ❌");
                }
                break;
            case 3:
                if (!!showContentPJ4) {
                    setShowContentPJ4(<ShowContentGamePJ contentNumber={numPJ} hideContent={styles.DeadlineSpaceFadeUp} hideImgPjEx={styles.hideImgPjEx} hideText={styles.hideText} />);
                    setbtnShow4("Show 🔍");
                    setTimeout(() => {
                        setShowContentPJ4(null);
                    }, 400);
                } else {
                    setShowContentPJ4(<ShowContentGamePJ showFullSizeImg={showFullSizeImg} showFullSizeImgCer={showFullSizeImgCer}
                        contentNumber={numPJ} hideContent={null} hideImgPjEx={null} hideText={null} />);
                    setbtnShow4("Hide ❌");
                }
                break;
            default:
        }

    }

    return (
        <div className={stylesBG.contentMyProject}>
            <h3 ref={projectUL}>🎮 GAME PROJECTS 🕹️</h3>
            <ul className={`${animListProejct}`}>
                <li className={stylesBG.listProject}>
                    <h4>
                        May 2022 DropQuest (UE4)
                        <br /><button className={`${stylesBG.btnShowPJ} ${!!showContentPJ1 ? stylesBG.activeBTN : stylesBG.noActiveBTN}`} onClick={() => { onClickShow(0) }}>{btnShow1}</button>
                    </h4>
                    {showContentPJ1}
                </li>
                <li className={stylesBG.listProject}>
                    <h4>
                        Dec 2020 JustCook (UE4)
                        <br /><button className={`${stylesBG.btnShowPJ} ${!!showContentPJ2 ? stylesBG.activeBTN : stylesBG.noActiveBTN}`} onClick={() => { onClickShow(1) }}>{btnShow2}</button>
                    </h4>
                    {showContentPJ2}
                </li>
                <li className={stylesBG.listProject}>
                    <h4>
                        <a href="https://duckhunt-js-tk.netlify.app/"> Sep 2020 DuckHunt for Consoles's Travel Web (JS)</a>
                        <a href="https://github.com/Tatomchin/DuckHuntJS"><img className={styles.gitHubImg} src={picGithub} alt="GitHub Logo" /></a>
                        <br /><button className={`${stylesBG.btnShowPJ} ${!!showContentPJ3 ? stylesBG.activeBTN : stylesBG.noActiveBTN}`} onClick={() => { onClickShow(2) }}>{btnShow3}</button>
                    </h4>
                    {showContentPJ3}
                </li>
                <li className={stylesBG.listProject}>
                    <h4>
                        <a href="https://dead-line-space-firstpj.netlify.app/"> Mar 2019 DeadLineSpace Game (JS)</a>
                        <a href="https://github.com/Tatomchin/DeadLineSpace"><img className={styles.gitHubImg} src={picGithub} alt="GitHub Logo" /></a>
                        <br /><button className={`${stylesBG.btnShowPJ} ${!!showContentPJ4 ? stylesBG.activeBTN : stylesBG.noActiveBTN}`} onClick={() => { onClickShow(3) }}>{btnShow4}</button>
                    </h4>
                    {showContentPJ4}
                </li>
            </ul>
            {backgroundBlack}
            {stateFullsizeImg}
        </div>
    )
}

export default ListGamePJ;