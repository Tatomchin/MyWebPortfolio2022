import styles from './Navbar.module.css'
import React, { useState } from 'react';

function NavBoxMenu() {
    const [isActive, setActive] = useState("false");
    function toggleBoxMenu() {
        setActive(!isActive);
    }

    return (
        <div className={styles.BorderHideMenu}>
            <div className={isActive ? styles.boxMenu : styles.change} onClick={toggleBoxMenu}>
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
            </div>
            <div className={`${styles.bgCloseHiddeMenu} ${isActive ? '' : styles.showbgCloseHiddeMenu}`} onClick={toggleBoxMenu}/>
            <div className={`${styles.hideMenu} ${isActive ? '' : styles.showHiddenMenu}`}>
                <ul>
                    <li><a href="#Techin">TECHIN</a></li>
                    <li><a href="#Skills">SKILLS</a></li>
                    <li><a href="#Projects">PROJECTS</a></li>
                    <li><a href="#Contact">CONTACT</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBoxMenu;





