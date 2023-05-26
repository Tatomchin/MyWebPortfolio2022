import styles from './Sayhi.module.css'
import animate from 'animate.css';

function Sayhi() {
    console.log(animate);
    return (
        <div className={styles.SayhiBg}>
            <h1 className='animate__animated animate__tada animate__infinite animate__slower'>
                Hello I'm
            </h1>
            <h2 id={styles.myName} > Techin Kowprasert</h2>
            <h2 id={styles.career}>Font-End & Game-Dev</h2>
            <h2 id={styles.welcome}>Welcome to my portfolio</h2>
            <p>
                I'm looking for you, my future company.
                Just take a look at my skills below and consider working with me.
                I hope to work with you.
                My example skills about this web-dev,
                font-end, and game-dev Thank you for your attention.
            </p>
        </div>
    )
}

export default Sayhi;