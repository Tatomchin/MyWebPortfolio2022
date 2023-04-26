import NavBTN from './NavBTN';
import NavBoxMenu from './NavBoxMenu';
import styles from './Navbar.module.css'
import React, { useState, useEffect } from 'react';

function Navbar() {
    const [windowDimension, detectHW] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight
    })

    const detectSize = () => {
        detectHW({
            winWidth: window.innerWidth,
            winHeight: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', detectSize)
        return () => {
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDimension])

    const [BTNMenu, setBTNMenu] = useState(<NavBTN />);
    const [hideBoxMenu, setHideBoxMenu] = useState(null);

    if (hideBoxMenu === null && windowDimension.winWidth < 800) {
        setBTNMenu(null);
        setHideBoxMenu(<NavBoxMenu/>) ;
       document.documentElement.style.setProperty('--spaceNav--', 'space-between');
    } else if (hideBoxMenu !== null && windowDimension.winWidth >= 800) {
        setBTNMenu(<NavBTN />);
        setHideBoxMenu(null);
        document.documentElement.style.setProperty('--spaceNav--', 'space-around');
    }

    return (
        <div className={styles.Navbar}>
            <div className={styles.NavSpace}>
                <a href='#Techin'><div className={styles.NavLogo}>TECHIN</div></a>
            </div>
            {BTNMenu}
            {hideBoxMenu}
        </div>
    )
}

export default Navbar;




