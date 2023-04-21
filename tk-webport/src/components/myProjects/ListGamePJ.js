import React, { useState } from 'react';
import styles from './ListGamePJ.module.css';
import picGithub from '../../picture/logo/github.png';

import ShowContentGamePJ from './ContentGamePj';

function ListGamePJ() {

    const [showContentPJ1, setShowContentPJ1] = useState(null);
    const [showContentPJ2, setShowContentPJ2] = useState(null);
    const [showContentPJ3, setShowContentPJ3] = useState(null);
    const [showContentPJ4, setShowContentPJ4] = useState(null);

    const [btnShow1, setbtnShow1] = useState("Show");
    const [btnShow2, setbtnShow2] = useState("Show");
    const [btnShow3, setbtnShow3] = useState("Show");
    const [btnShow4, setbtnShow4] = useState("Show");

    function onClickShow(numPJ) {
        switch (numPJ) {
            case 0:
                if (!!showContentPJ1) {
                    setShowContentPJ1(null);
                    setbtnShow1("Show");
                } else {
                    setShowContentPJ1(<ShowContentGamePJ contentNumber={numPJ}/>);
                    setbtnShow1("Hide");
                }

                break;
            case 1:
                if (!!showContentPJ2) {
                    setShowContentPJ2(null);
                    setbtnShow2("Show");
                } else {
                    setShowContentPJ2(<ShowContentGamePJ contentNumber={numPJ}/>);
                    setbtnShow2("Hide");
                }
                break;
            case 2:
                if (!!showContentPJ3) {
                    setShowContentPJ3(null);
                    setbtnShow3("Show");
                } else {
                    setShowContentPJ3(<ShowContentGamePJ contentNumber={numPJ}/>);
                    setbtnShow3("Hide");
                }
                break;
            case 3:
                if (!!showContentPJ4) {
                    setShowContentPJ4(null);
                    setbtnShow4("Show");
                } else {
                    setShowContentPJ4(<ShowContentGamePJ contentNumber={numPJ}/>);
                    setbtnShow4("Hide");
                }
                break;
            default:
        }

    }

    return (
        <div>
            <h3>GAME PROJECTS</h3>
            <ul>
                <li className={styles.listProject}>
                    <h4>
                        May 2022 DropQuest (UE4)
                        <button onClick={() => { onClickShow(0) }}>{btnShow1}</button>
                    </h4>
                    {showContentPJ1}
                </li>
                <li className={styles.listProject}>
                    <h4>
                        Dec 2020 JustCook (UE4)
                        <button onClick={() => { onClickShow(1) }}>{btnShow2}</button>
                    </h4>
                    {showContentPJ2}
                </li>
                <li className={styles.listProject}>
                    <h4>
                        Sep 2020 DuckHunt for Consoles's Travel Web (JS)
                        <a href="https://github.com/Tatomchin/DuckHuntJS"><img className={styles.gitHubImg} src={picGithub} alt="GitHub Logo" /></a>
                        <button onClick={() => { onClickShow(2) }}>{btnShow3}</button>
                    </h4>
                    {showContentPJ3}
                </li>
                <li className={styles.listProject}>
                    <h4>
                        Mar 2019 DeadLineSpace Game (JS)
                        <a href="https://github.com/Tatomchin/DeadLineSpace"><img className={styles.gitHubImg} src={picGithub} alt="GitHub Logo" /></a>
                        <button onClick={() => { onClickShow(3) }}>{btnShow4}</button>
                    </h4>
                    {showContentPJ4}
                </li>
            </ul>
        </div>
    )
}

export default ListGamePJ;