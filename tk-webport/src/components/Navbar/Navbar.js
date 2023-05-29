import NavBTN from './NavBTN';
import NavBoxMenu from './NavBoxMenu';
import styles from './Navbar.module.css'
import React, { useState } from 'react';
import { useContext } from 'react';
import { ConData } from '../../App.js'

function Navbar() {
    const { windowDimension } = useContext(ConData);
    const [BTNMenu, setBTNMenu] = useState(<NavBTN />);
    const [hideBoxMenu, setHideBoxMenu] = useState(null);

    if (hideBoxMenu === null && windowDimension.winWidth < 600) {
        setBTNMenu(null);
        setHideBoxMenu(<NavBoxMenu />);
        document.documentElement.style.setProperty('--spaceNav--', 'space-between');
    } else if (hideBoxMenu !== null && windowDimension.winWidth >= 600) {
        setBTNMenu(<NavBTN />);
        setHideBoxMenu(null);
        document.documentElement.style.setProperty('--spaceNav--', 'space-around');
    }
    const { st_techinTagTop } = useContext(ConData);

    return (
        <nav className={styles.Navbar}>
            <div className={styles.NavSpace}>
                <a href='#Techin'><div className={`${styles.NavLogo} ${st_techinTagTop ? styles.HighLightLogo : ''}`}>TECHIN</div></a>
            </div>
            {BTNMenu}
            {hideBoxMenu}
        </nav>
    )
}

export default Navbar;




