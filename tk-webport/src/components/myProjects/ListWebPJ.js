import React, { useState } from 'react';
import styles from './ListWebPJ.module.css';
import picGithub from '../../picture/logo/github.png';

import ShowContentWebPJ from './ContentWebPj';

function ListWebPJ() {
    const [showContentPJ1, setShowContentPJ1] = useState(null);
    const [showContentPJ2, setShowContentPJ2] = useState(null);
    const [showContentPJ3, setShowContentPJ3] = useState(null);

    const [btnShow1, setbtnShow1] = useState("Show");
    const [btnShow2, setbtnShow2] = useState("Show");
    const [btnShow3, setbtnShow3] = useState("Show");

    function onClickShow(numPJ) {
        switch (numPJ) {
            case 0:
                if (!!showContentPJ1) {
                    setShowContentPJ1(null);
                    setbtnShow1("Show");
                } else {
                    setShowContentPJ1(<ShowContentWebPJ contentNumber={numPJ}/>);
                    setbtnShow1("Hide");
                }

                break;
            case 1:
                if (!!showContentPJ2) {
                    setShowContentPJ2(null);
                    setbtnShow2("Show");
                } else {
                    setShowContentPJ2(<ShowContentWebPJ contentNumber={numPJ}/>);
                    setbtnShow2("Hide");
                }
                break;
            case 2:
                if (!!showContentPJ3) {
                    setShowContentPJ3(null);
                    setbtnShow3("Show");
                } else {
                    setShowContentPJ3(<ShowContentWebPJ contentNumber={numPJ}/>);
                    setbtnShow3("Hide");
                }
                break;
            default:
        }
    }

    return (
        <div>
            <h3>WEBSITE PROJECTS</h3>
            <ul>
                <li className={styles.listProject}>
                    <h4>
                        <a href="https://asean-information-itkmitl.netlify.app/">Apr 2020 ASEAN Information Web</a>
                        <a href="https://github.com/Tatomchin/AseanWebIT"><img className={styles.gitHubImg} src={picGithub} alt="GitHub Logo" /></a>
                        <button onClick={() => { onClickShow(0) }}>{btnShow1}</button>
                    </h4>
                    {showContentPJ1}
                </li>
                <li className={styles.listProject}>
                    <h4>
                        <a href="https://console-travel-rocketpj.netlify.app/#home">Sep 2020 Consoles's Travel</a>
                        <a href="https://github.com/Tatomchin/RockProject-MP2020"><img className={styles.gitHubImg} src={picGithub} alt="GitHub Logo" /></a>
                        <button onClick={() => { onClickShow(1) }}>{btnShow2}</button>
                    </h4>
                    {showContentPJ2}
                </li>
                <li className={styles.listProject}>
                    <h4>
                        <a href="https://cleanfield.netlify.app/">Nov 2020 Cleanfield Web</a>
                        <a href="https://github.com/Tatomchin/coopProject-Cleanfield"><img className={styles.gitHubImg} src={picGithub} alt="GitHub Logo" /></a>
                        <button onClick={() => { onClickShow(2) }}>{btnShow3}</button>
                    </h4>
                    {showContentPJ3}
                </li>
            </ul>
        </div>
    )
}

export default ListWebPJ;