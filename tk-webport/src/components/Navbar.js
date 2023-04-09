import styles from './Navbar.module.css'

function Navbar() {
    return (
        <div className={styles.Navbar}>
            <div className={styles.NavSpace}>
                <div className={styles.NavLogo}>TECHIN</div>
            </div>
            <div className={styles.NavSpace}>
                <div className={styles.BTN}>PORTFOLIO</div>
                <div className={styles.BTN}>SKILL</div>
                <div className={styles.BTN}>CONTACT</div>
            </div>
        </div>
    )
}

export default Navbar;