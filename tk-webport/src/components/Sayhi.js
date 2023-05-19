import styles from './Sayhi.module.css'

function Sayhi() {
    return (
        <div className={styles.SayhiBg}>
            <h1>Hello I'm <span id={styles.myName}>Techin</span> </h1>
            <h2 id={styles.career}>Font-End & Game-Dev</h2>
            <h2 id={styles.welcome}>Welcome to my portfolio</h2>
            <p>
                I'm looking for you my future company,
                Just take a look my skills below and considering me to work with you :D
                I hope to work with you.
                My example skills about this
                Web-Dev, Font-End and Game-Dev
                Thank you for your attention.
            </p>
        </div>
    )
}

export default Sayhi;