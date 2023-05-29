import styles from './Sayhi.module.css'
import 'animate.css';
import { useContext, useState } from 'react';
import { ConData } from '../App.js'

function Sayhi() {
    const { windowDimension } = useContext(ConData);
    const [textMax600, setTextMax600] = useState(null);
    const [textMin600, setTextMin600] = useState(null);
    if (windowDimension.winWidth < 600 && textMax600 === null) {
        setTextMax600(
            <p>
                I'm looking for you, my future company.
                Just take a look at my skills below and consider me.
                I hope to work with you.
                My example skills about this web-dev,
                font-end, and game-dev Thank you for your attention.
            </p>
        );
        setTextMin600(null);
    }
    else if(windowDimension.winWidth >= 600  &&  textMin600 === null) {
        setTextMax600(null);
        setTextMin600(
            <p>
                I'm looking for you, my future company. <br />
                Just take a look at my skills below and consider me.
                I hope to work with you.<br />
                My example skills about this web-dev,<br />
                font-end, and game-dev Thank you for your attention.
            </p>);
    }
    return (
        <div className={styles.SayhiBg}>
            <h1 className='animate__animated animate__tada animate__infinite animate__slower'>
                Hello I'm
            </h1>
            <h2 id={styles.myName} > Techin </h2>
            <h2 id={styles.career}>Font-End & Game-Dev</h2>
            <h2 id={styles.welcome}>Welcome to my portfolio</h2>
            {textMax600}
            {textMin600}
        </div>
    )
}

export default Sayhi;